import React, { useState } from 'react'

const Login = ({addUser}) => {
  const [currentState, setCurrentState] = useState('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFormHandler=(e)=> {
    e.preventDefault();

    const registerUser = {
      name: name,
      email: email,
      password: password,
    };
    addUser(registerUser);
    console.log('Current State :', currentState);
    if(currentState == 'Login'){
      
      setEmail('');
      setPassword('');
    }else{
      
      setName('');
      setEmail('');
      setPassword('');
    }
  }
  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' onSubmit={loginFormHandler}>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-2xl dark:text-white'>{currentState}</p>
      </div>
        {currentState == 'Login' ? '' : <input onChange={(e)=> setName(e.target.value)} value={name} type="text" className='w-full px-1 py-1 border border-gray-800 dark:text-white' placeholder='Name' required />}
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className='w-full px-1 py-1 border border-gray-800 dark:text-white' placeholder='Email' required />
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" className='w-full px-1 py-1 border border-gray-800 dark:text-white' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px] dark:text-white'>
        {currentState == 'Login' ? <p>Don't have an account</p> : <p>Already have an account?</p>}
        {currentState == 'Login' ? <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> : <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login Here</p>}
      </div>
      {currentState == 'Login' ? <p className='cursor-pointer text-sm dark:text-white' onClick={()=> navigate('/forgot-password')}>Forgot password</p> : ''}
      <button className='bg-indigo-700 hover:bg-indigo-500 text-white text-md font-medium rounded-lg border border-black w-25 h-9'>{currentState == 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
