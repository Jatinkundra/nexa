// Icons
import { ReactComponent as Notification } from '../../assets/icons/Notification.svg';
import { ReactComponent as UilCalender } from '../../assets/icons/uil_calender.svg';
// Images
import avatar from '../../assets/avatars/avatar.png';
import Ethereum from '../../assets/icons/Ethereum (ETH).png';

import { useUserAuth } from '../../context/authContext'
import { useContext, useEffect, useState } from 'react';

import { TransactionContext } from '../../context/TransactionContext.jsx';

function TdashHeader() {

    const { connectWallet, currentAccount, balance, symbol } = useContext(TransactionContext);

    const { user } = useUserAuth();
    const [fullname, setFullname] = useState('');

    const handleConnectWallet = async () => {
        await connectWallet();
    };

    useEffect(() => {
        if (user) {
            setFullname(user.displayName);
        }
        return () => { }
    }, [user]);

    return (
        <div className='w-full mb-6'>
            <div className='flex w-full justify-between'>
                <div className='flex'>
                    <div className='flex justify-center items-center'>
                        <img className="m-[auto] h-11 w-11 rounded-full" src={avatar} alt=""></img>
                    </div>
                    <div className='ml-2 w-auto'>
                        <div className='text-white font-semibold leading-6 text-xl capitalize'>{fullname}</div>
                        <div className='text-white font-medium text-base leading-5 text-opacity-60'>Founder@ Training Horzon</div>
                    </div>
                </div>
                <div className='flex text-white'>
                    <div onClick={handleConnectWallet} className='flex justify-center items-center rounded-md px-6 py-1 bg-gradient-to-r from-[#0046de] from-0% to-[#7f5fff] to-100%'>
                        {currentAccount ? <>
                            <div className='flex flex-col flex-auto justify-between'>
                                <div className='text-[#E0DEE5] font-medium text-[0.75rem]'>Your Balance</div>
                                <div className='font-bold text-xl leading-6'>{balance}</div>
                            </div>
                            <div className='flex flex-auto gap-1 h-full ml-4 items-end'>
                                <img src={Ethereum} alt="symbol" className='block mb-1' />
                                {symbol}
                            </div>
                        </> : "Connect Wallet"}
                    </div>
                    <div className="dateselect ml-4 flex rounded-md justify-center p-3 py-2 bg-[#131313]">
                        <UilCalender className='w-5 h-5 m-auto fill-gray-600' />
                        <select className="bg-transparent font-medium text-base text-gray-200 leading-5 pl-1 pr-2">
                            <option>16 June, 2023</option>
                        </select>
                    </div>
                    <div className='notification ml-2 flex rounded-md justify-center p-3 py-2 bg-[#131313]'>
                        <Notification className='w-5 h-5 m-auto mr-1 fill-gray-600' />
                        <div className='notification-dot flex m-auto items-center justify-center h-5 w-5 text-xs bg-teal-600 rounded-full'>4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TdashHeader