import React, { useEffect, useState } from "react";
import { ethers, formatEther, parseEther, formatUnits } from "ethers";

import { contractABI, contractAddress } from "../contracts/Edu.jsx";
import { CrowfundingABI, contractAddress as crowdcontractAddress } from "../contracts/crowdfunding.jsx";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
    const network = {
        name: 'cronos',
        chainId: 338,
    }

    const provider = new ethers.JsonRpcProvider('https://evm-t3.cronos.org/', network);
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, provider);

    return transactionsContract;
};

const createCrowdFundPContract = async () => {
    const network = {
        name: 'cronos',
        chainId: 338,
    }

    const provider = await new ethers.JsonRpcProvider('https://evm-t3.cronos.org/', network);
    const crowdContract = new ethers.Contract(crowdcontractAddress, CrowfundingABI, provider);

    return crowdContract;
};

const createCrowdFundSContract = async () => {
    const network = {
        name: 'cronos',
        chainId: 338,
    }

    const provider = new ethers.JsonRpcProvider('https://evm-t3.cronos.org/', network);
    const signer = await provider.getSigner();
    const crowdContract = new ethers.Contract(crowdcontractAddress, CrowfundingABI, signer);

    return crowdContract;
};

export const TransactionsProvider = ({ children }) => {
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [decimals, setDecimals] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [balance, setBalance] = useState("");

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setCurrentAccount(newAccount);
    }

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({
                method: "eth_requestAccounts"
            }).then((res) => {
                accountChangedHandler(res[0])
            });
            const chainId = await ethereum.request({ method: 'eth_chainId' });
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    };

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({
                method: "eth_accounts"
            }).then((res) => {
                if (res.length != 0) {
                    accountChangedHandler(res[0]);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnect();
    }, [currentAccount]);

    useEffect(() => {
        checkIfWalletIsConnect();
    }, []);

    if (ethereum !== undefined) {
        ethereum.on('accountsChanged', accountChangedHandler);
        ethereum.on('chainChanged', chainChangedHandler);

        ethereum.on('disconnect', () => { setCurrentAccount(null) });
    }

    // Edu Token Contract

    const getName = async () => {
        const contract = createEthereumContract();
        const name = await contract.name();
        return name;
    }

    const getSymbol = async () => {
        const contract = createEthereumContract();
        const symbol = await contract.symbol();
        return symbol;
    }

    const getDecimals = async () => {
        const contract = createEthereumContract();
        const decimals = await contract.decimals();
        return decimals;
    }

    const getTotalSupply = async () => {
        const contract = createEthereumContract();
        const totalSupply = await contract.totalSupply();
        return totalSupply;
    }

    const getBalanceOf = async (address) => {
        const contract = createEthereumContract();
        const balanceOf = await contract.balanceOf(address);
        return balanceOf;
    }

    useEffect(() => {
        if (currentAccount) {
            getBalanceOf(currentAccount).then((balance) => {
                const balanceInEther = formatUnits(balance, 18);
                setBalance(balanceInEther);
                console.log(balance);
            });
        }
        getSymbol().then((symbol) => {
            setSymbol(symbol);
        });
        getName().then((name) => {
            setName(name);
        });
        getDecimals().then((decimals) => {
            setDecimals(decimals);
        });
    }, [currentAccount]);

    // Crowdfunding Contract

    const createChallenge = async (problemStatementLink, reward, deadlineToSubmit, votingPeriod) => {
        try {
            const crowdContract = await createCrowdFundSContract().then((contr) => {
                return contr;
            });

            if (crowdContract && currentAccount) {
                const transaction = await crowdContract.createChallenge(
                    problemStatementLink,
                    reward,
                    deadlineToSubmit,
                    votingPeriod
                );
                await transaction.wait();
                console.log("Challenge created successfully!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const closeChallenge = async (challengeIndex) => {
        try {
            const crowdContract = await createCrowdFundSContract().then((contr) => {
                return contr;
            });

            if (crowdContract && currentAccount) {
                const transaction = await crowdContract.closeChallenge(challengeIndex);
                await transaction.wait();
                console.log("Challenge closed successfully!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const submitSolution = async (challengeIndex, descriptionLink) => {
        try {
            const crowdContract = await createCrowdFundSContract().then((contr) => {
                return contr;
            });

            if (crowdContract && currentAccount) {
                const transaction = await crowdContract.submitSolution(challengeIndex, descriptionLink);
                await transaction.wait();
                console.log("Solution submitted successfully!");
                return transaction;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const voteForSolution = async (challengeIndex, solutionIndex) => {
        try {
            const crowdContract = await createCrowdFundSContract().then((contr) => {
                return contr;
            });

            if (crowdContract && currentAccount) {
                const transaction = await crowdContract.voteForSolution(challengeIndex, solutionIndex);
                await transaction.wait();
                console.log("Vote cast successfully!");
                return transaction;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getChallenge = async () => {
        try {
            const crowdContract = await createCrowdFundPContract().then((contr) => {
                return contr;
            });;

            if (crowdContract && currentAccount) {
                const challenge = await crowdContract.challenges(0);
                console.log(challenge);
                return challenge;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getEduTokenAddress = async () => {
        try {
            const crowdContract = await createCrowdFundPContract().then((contr) => {
                return contr;
            });;

            if (crowdContract && currentAccount) {
                const eduTokenAdd = await crowdContract.eduTokenAddr();
                console.log(eduTokenAdd);
                return eduTokenAdd;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getSolutions = async (challengeIndex) => {
        try {
            const crowdContract = await createCrowdFundPContract().then((contr) => {
                return contr;
            });;

            if (crowdContract && currentAccount) {
                const solutions = await crowdContract.solutions(challengeIndex);
                console.log(solutions);
                return solutions;
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Event listeners
    // useEffect(() => {
    //     if (crowdContract && currentAccount) {
    //         const challengeCreatedFilter = crowdContract.filters.ChallengeCreated();
    //         const solutionSubmittedFilter = crowdContract.filters.SolutionSubmitted();
    //         const voteCastFilter = crowdContract.filters.VoteCast();

    //         crowdContract.on(challengeCreatedFilter, (challengeIndex, creator, problemStatementLink, reward, deadlineToSubmit, votingPeriod) => {
    //             console.log(`Challenge created - Index: ${challengeIndex}, Creator: ${creator}, Link: ${problemStatementLink}, Reward: ${reward}`);
    //         });

    //         crowdContract.on(solutionSubmittedFilter, (challengeIndex, solver, descriptionLink) => {
    //             console.log(`Solution submitted - Challenge Index: ${challengeIndex}, Solver: ${solver}, Link: ${descriptionLink}`);
    //         });

    //         crowdContract.on(voteCastFilter, (challengeIndex, solutionIndex, voter) => {
    //             console.log(`Vote cast - Challenge Index: ${challengeIndex}, Solution Index: ${solutionIndex}, Voter: ${voter}`);
    //         });

    //         // Clean up event listeners on component unmount
    //         return () => {
    //             crowdContract.off(challengeCreatedFilter);
    //             crowdContract.off(solutionSubmittedFilter);
    //             crowdContract.off(voteCastFilter);
    //         };
    //     }
    // }, [crowdContract, currentAccount]);


    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                isLoading,
                handleChange,
                formData,
                getName,
                getSymbol,
                getDecimals,
                getTotalSupply,
                getBalanceOf,
                symbol,
                balance,
                createChallenge,
                getChallenge
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};