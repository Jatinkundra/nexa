import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext';
import { ReactComponent as Hilex } from '../../assets/icons/Hilex.svg';
import Checkbox from '../../components/checkbox/login_checkbox.jsx';
import GoogleIcon from '../../assets/icons/Google.png';
import AIGirlImage from '../../assets/images/job_matching.png';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

export default function Createaccount() {

    const navigate = useNavigate();

    const [fullname, setFullname] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [conf_pass, setConfPass] = React.useState('');

    const { createUser } = useUserAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirm_password') {
            setConfPass(value);
        } else if (name === 'fullname') {
            setFullname(value.trim());
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (password !== conf_pass) {
                alert('Password and Confirm Password must be same');
                return;
            }

            const res = await createUser(email, password);
            if (res) {
                console.log(res);
                const updated = updateProfile(res.user, {
                    displayName: fullname,
                    email: email,
                });
                if (updated) {
                    console.log('user sign in and updated');
                    navigate('/teacher/dashboard');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex h-screen max-h-screen w-full'>
            <div className="w-1/2 flex flex-col p-14 h-full">
                <Hilex className="h-10 w-10 aspect-square" />
                <div className='flex flex-auto items-center justify-center h-auto'>
                    <div className='w-3/5'>
                        <div className='font-jakarta-sans text-4xl leading-[2.75rem]'>Let's learn with <span className='font-bold text-[#F3BA2F]'>AI!</span></div>
                        <div className='font-jakarta-sans font-medium text-lg mt-5 text-[#9B9C9E]'>Log in to name to start creating magic.</div>
                        <form className="mt-14" onSubmit={handleSubmit} action="#" >

                            <input id="fullname" name="fullname" type="text" autoComplete="name" placeholder='Full Name' required onChange={handleChange} className="block w-full rounded-lg border border-white border-opacity-10 p-1.5 bg-[#131313] px-3 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />

                            <input id="email" name="email" type="email" autoComplete="email" placeholder='Email' required onChange={handleChange} className="block w-full mt-6 rounded-lg border border-white border-opacity-10 p-1.5 bg-[#131313] px-3 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />

                            <input id="password" name="password" type="password" autoComplete="current-password" placeholder='New Password' required onChange={handleChange} className="block w-full mt-6 rounded-lg border border-white border-opacity-10 p-1.5 bg-[#131313] px-3 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />

                            <input id="confirm_password" name="confirm_password" type="password" autoComplete="current-password" placeholder='Confirm Password' required onChange={handleChange} className="block w-full mt-6 rounded-lg border border-white border-opacity-10 p-1.5 bg-[#131313] px-3 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" />

                            <div className="flex w-full mt-8 justify-between">
                                <Checkbox />
                                <div>
                                    <a href="#" className="font-jakarta-sans font-semibold text-base leading-6 text-white hover:text-opacity-75">Forgot password?</a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-lg bg-white mt-10 px-3 py-[0.5rem] text-sm font-semibold leading-6 text-black shadow-sm hover:bg-opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                            </div>
                        </form>
                        <div className='divider my-10 flex items-center w-full'>
                            <hr className='flex-auto h-1 w-auto border-[#363A3D]' />
                            <div className='mx-6 text-[#686B6E]'>or continue with</div>
                            <hr className='flex-auto h-1 w-auto border-[#363A3D]' />
                        </div>
                        <div className='flex w-full justify-center items-center'>
                            <button className='flex gap-3 items-center justify-center px-12 py-4 rounded-lg bg-[#1A1D21] hover:bg-slate-700 text-[#686B6E] font-jakarta-sans font-semibold text-base leading-6'>
                                <img src={GoogleIcon} alt="Google" />Google Account
                            </button>
                        </div>
                    </div>
                </div>
                <div className='text-[#686B6E] font-jakarta-sans font-semibold text-base leading-6'>
                    Already have an account? <Link to={'/auth/login'} className='text-[#F3BA2F]'>Login</Link>
                </div>
            </div>
            <div className="w-1/2 relative ai-girl rounded-l-2xl flex flex-col overflow-hidden justify-center items-center h-full">
                <img src={AIGirlImage} className='flex absolute overflow-clip right-0 top-0 h-full w-full' alt="" />
            </div>

        </div>
    )
}
