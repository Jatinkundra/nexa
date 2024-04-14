// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChallengeContract {
    struct Challenge {
        address creator;
        string problemStatementLink;
        uint256 reward;
        uint256 deadlineToSubmit;
        uint256 votingPeriodEnd;
        bool isClosed;
    }

    struct Solution {
        address solver;
        string descriptionLink;
        uint256 votes;
    }

    address public eduTokenAddr;
    Challenge[] public challenges;
    mapping(uint256 => Solution[]) public challengeSolutions;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    event ChallengeCreated(uint256 indexed challengeIndex, address creator, string problemStatementLink, uint256 reward, uint256 deadlineToSubmit, uint256 votingPeriod);
    event SolutionSubmitted(uint256 indexed challengeIndex, address solver, string descriptionLink);
    event VoteCast(uint256 indexed challengeIndex, uint256 solutionIndex, address voter);
    event ChallengeWinner(uint256 indexed challengeIndex, address winner, uint256 reward);

    constructor(address _eduTokenAddr) {
        eduTokenAddr = _eduTokenAddr;
    }

    function createChallenge(string memory _problemStatementLink, uint256 _reward, uint256 _deadlineToSubmit, uint256 _votingPeriod) public {
        challenges.push(Challenge({
            creator: msg.sender,
            problemStatementLink: _problemStatementLink,
            reward: _reward,
            deadlineToSubmit: block.timestamp + _deadlineToSubmit,
            votingPeriodEnd: block.timestamp + _deadlineToSubmit + _votingPeriod,
            isClosed: false
        }));
        emit ChallengeCreated(challenges.length - 1, msg.sender, _problemStatementLink, _reward, _deadlineToSubmit, _votingPeriod);
    }

    function submitSolution(uint256 _challengeIndex, string memory _descriptionLink) public {
        require(_challengeIndex < challenges.length, "Challenge does not exist.");
        require(block.timestamp <= challenges[_challengeIndex].deadlineToSubmit, "Deadline for submitting solutions has passed.");
        
        challengeSolutions[_challengeIndex].push(Solution({
            solver: msg.sender,
            descriptionLink: _descriptionLink,
            votes: 0
        }));
        emit SolutionSubmitted(_challengeIndex, msg.sender, _descriptionLink);
    }

    function voteForSolution(uint256 _challengeIndex, uint256 _solutionIndex) public payable {
        require(msg.value > 0, "Must fund to vote.");
        require(_challengeIndex < challenges.length, "Challenge does not exist.");
        require(_solutionIndex < challengeSolutions[_challengeIndex].length, "Solution does not exist.");
        require(block.timestamp <= challenges[_challengeIndex].votingPeriodEnd, "Voting period has ended.");
        require(!hasVoted[_challengeIndex][msg.sender], "You have already voted.");

        challengeSolutions[_challengeIndex][_solutionIndex].votes += 1;
        hasVoted[_challengeIndex][msg.sender] = true;

        emit VoteCast(_challengeIndex, _solutionIndex, msg.sender);
    }

    function closeChallenge(uint256 _challengeIndex) public {
        require(_challengeIndex < challenges.length, "Challenge does not exist.");
        require(block.timestamp > challenges[_challengeIndex].votingPeriodEnd, "Voting period has not ended.");
        require(!challenges[_challengeIndex].isClosed, "Challenge is already closed.");

        Solution[] memory solutions = challengeSolutions[_challengeIndex];
        uint256 maxVote = 0;
        uint256 winningIndex = 0;
        for (uint256 i = 0; i < solutions.length; i++) {
            if (solutions[i].votes > maxVote) {
                maxVote = solutions[i].votes;
                winningIndex = i;
            }
        }

        address payable winner = payable(solutions[winningIndex].solver);
        winner.transfer(challenges[_challengeIndex].reward);
        challenges[_challengeIndex].isClosed = true;

        emit ChallengeWinner(_challengeIndex, winner, challenges[_challengeIndex].reward);
    }
}