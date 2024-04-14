export const contractAddress = "0xBEf36330a5D18A5Ba22F8bC12f849f849e1179ad";
export const CrowfundingABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_eduTokenAddr",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "challengeIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "problemStatementLink",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "deadlineToSubmit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "votingPeriod",
                "type": "uint256"
            }
        ],
        "name": "ChallengeCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "challengeIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            }
        ],
        "name": "ChallengeWinner",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_challengeIndex",
                "type": "uint256"
            }
        ],
        "name": "closeChallenge",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_problemStatementLink",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_reward",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_deadlineToSubmit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_votingPeriod",
                "type": "uint256"
            }
        ],
        "name": "createChallenge",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "challengeIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "solver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "descriptionLink",
                "type": "string"
            }
        ],
        "name": "SolutionSubmitted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_challengeIndex",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_descriptionLink",
                "type": "string"
            }
        ],
        "name": "submitSolution",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "challengeIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "solutionIndex",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "voter",
                "type": "address"
            }
        ],
        "name": "VoteCast",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_challengeIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_solutionIndex",
                "type": "uint256"
            }
        ],
        "name": "voteForSolution",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "challenges",
        "outputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "problemStatementLink",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadlineToSubmit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "votingPeriod",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "eduTokenAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "solutions",
        "outputs": [
            {
                "internalType": "address",
                "name": "solver",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "descriptionLink",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "votes",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]