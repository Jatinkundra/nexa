import React, { useEffect, useState, useContext } from 'react';

export default function Eduinitiative() {
  const [title, setTitle] = useState('')
  const [problink, setProblink] = useState('')
  const [creator, setCreator] = useState('')
  const [reward, setReward] = useState('')
  const [deadline, setDeadline] = useState('')
  const [voteperiod, setVoteperiod] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'problink':
        setProblink(value);
        break;
      case 'creator':
        setCreator(value);
        break;
      case 'reward':
        setReward(value);
        break;
      case 'deadline':
        setDeadline(value);
        break;
      case 'voteperiod':
        setVoteperiod(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = () => {
  }

  return (
    <form onSubmit={handleSubmit} action='#' className='campaignform bg-cover flex flex-col flex-auto px-20 border border-slate-700 rounded-2xl py-16 w-full'>
      <div className='flex font-dmsans w-full justify-center font-medium tracking-wider text-4xl leading-10 mb-6'>Launch a Education Initiative</div>
      <div className='flex mt-12 justify-center items-start'>
        <div className='flex font-jakarta-sans tracking-wide text-3xl'>I want to start a <div className='inline-block mx-10'><input type="text" name='title' onChange={handleChange} placeholder='Title...' className='bg-transparent w-96 font-medium font-jakarta-sans text-3xl tracking-widest' /><hr className='border-white border-opacity-30 w-96 mt-6' /></div> campaign.</div>
      </div>
      <div className='flex flex-col w-full justify-center items-center mt-8 '><input type="text" name='problink' onChange={handleChange} placeholder='Problem Statement link...' className='m-auto bg-transparent w-[80%] font-medium font-jakarta-sans text-3xl tracking-widest' /><hr className='border-white border-opacity-30 w-[80%] mt-6' /></div>
      <div className='flex items-start justify-center w-full gap-32 mt-14'>
        <div className='w-auto'><input type="text" name='creator' onChange={handleChange} placeholder='Creator Name' className='bg-transparent w-[32rem] font-medium font-jakarta-sans text-3xl tracking-widest' /><hr className='border-white border-opacity-30 w-[32rem] mt-6' /></div>
        <div className='w-auto flex font-jakarta-sans tracking-wide text-3xl'><div className='inline-block mr-10'><input type="number" name='reward' onChange={handleChange} placeholder='Reward' className='bg-transparent w-full font-medium font-jakarta-sans text-3xl tracking-widest' /><hr className='border-white border-opacity-30 w-full mt-6' /></div>EDU</div>
      </div>
      <div className='flex items-start justify-center w-full gap-32 mt-14'>
        <div className='w-auto flex font-jakarta-sans tracking-wide text-3xl'><div className='inline-block mr-10'><input type="number" name='voteperiod' onChange={handleChange} placeholder='Voting Period' className='bg-transparent w-[24rem] font-medium font-jakarta-sans text-3xl tracking-widest' /><hr className='border-white border-opacity-30 w-[32rem] mt-6' /></div>Days</div>
        <div className='w-auto flex font-jakarta-sans tracking-wide text-3xl'><div className='inline-block mr-10'><input type="number" name='deadline' onChange={handleChange} placeholder='Deadline' className='bg-transparent w-[24rem] font-medium font-jakarta-sans text-3xl tracking-widest' /><hr className='border-white border-opacity-30 w-full mt-6' /></div>Days</div>
      </div>
      <div className='flex w-full mt-24 justify-end items-center'>
        <button type='submit' className='bg-blue-700 px-12 py-4 rounded-lg  font-semibold'>Launch</button>
      </div>
    </form>
  )
}
