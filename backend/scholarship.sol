// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ScholarshipPool {
    struct Proposal {
        address creator;
        address recipient;
        uint256 amount;
        string description;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        uint256 deadline;
    }

    IERC20 public token;
    Proposal[] public proposals;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function fundPool(uint256 _amount) public {
        require(token.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
    }

    function createProposal(address _recipient, uint256 _amount, string memory _description, uint256 _duration) public {
        proposals.push(Proposal({
            creator: msg.sender,
            recipient: _recipient,
            amount: _amount,
            description: _description,
            forVotes: 0,
            againstVotes: 0,
            executed: false,
            deadline: block.timestamp + _duration
        }));
    }

    function vote(uint256 _proposalId, bool _support) public {
        require(_proposalId < proposals.length, "Invalid proposal ID");
        require(!hasVoted[_proposalId][msg.sender], "Already voted");
        require(block.timestamp <= proposals[_proposalId].deadline, "Voting period has ended");

        Proposal storage proposal = proposals[_proposalId];
        if (_support) {
            proposal.forVotes += 1;
        } else {
            proposal.againstVotes += 1;
        }
        hasVoted[_proposalId][msg.sender] = true;
    }

    function executeProposal(uint256 _proposalId) public {
        require(_proposalId < proposals.length, "Invalid proposal ID");
        Proposal storage proposal = proposals[_proposalId];

        require(block.timestamp > proposal.deadline, "Voting period not yet ended");
        require(!proposal.executed, "Proposal already executed");
        require(proposal.forVotes > proposal.againstVotes, "More votes against than for");

        require(token.balanceOf(address(this)) >= proposal.amount, "Insufficient funds in pool");
        require(token.transfer(proposal.recipient, proposal.amount), "Transfer failed");

        proposal.executed = true;
    }

    function getAllProposals() public view returns (Proposal[] memory) {
        return proposals;
    }

    function getProposal(uint256 _proposalId) public view returns (Proposal memory) {
        require(_proposalId < proposals.length, "Invalid proposal ID");
        return proposals[_proposalId];
    }

    function getProposalCount() public view returns (uint256) {
        return proposals.length;
    }
}
