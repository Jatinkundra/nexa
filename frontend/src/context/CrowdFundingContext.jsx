import React, { useEffect, useState } from "react";
import { ethers, formatEther, parseEther, formatUnits } from "ethers";

import { contractABI, contractAddress } from "../contracts/Edu.jsx";

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

export const CrowdFundingProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
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

    ethereum.on('accountsChanged', accountChangedHandler);
    ethereum.on('chainChanged', chainChangedHandler);

    useEffect(() => {
        // checkIfWalletIsConnect();
        if (ethereum.isConnected()) {
            checkIfWalletIsConnect();
        }

        return () => { }
    }, []);

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({
                method: "eth_accounts"
            });

            if (accounts.length) {
                accountChangedHandler(accounts[0]);

                // getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    ethereum.on('connect', () => {
        checkIfWalletIsConnect()

    });

    return (
        <TransactionContext.Provider
            value={{
                currentAccount,
                isLoading,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};