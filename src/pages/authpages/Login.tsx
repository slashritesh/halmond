import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-[600px] flex items-center justify-center'>
        <div className='p-10 w-2/3 flex flex-col border'>
          <h1 className='font-semibold text-lg mb-10'>Login to Your Account</h1>
          <form className='flex flex-col mb-5 gap-5' action="">
            <div className='flex gap-2 flex-col'>
              <label htmlFor="">Email</label>
              <input className='p-2 outline-none bg-slate-50' type="text" />
            </div>
            <div className='flex gap-2 flex-col'>
              <label htmlFor="">Password</label>
              <input className='p-2 outline-none bg-slate-50' type="password" />
            </div>
            <input className='bg-orange-100 font-medium p-2 w-full' type="submit" />
          </form>
          <p className='text-[0.9rem] mt-10 text-center'>create new account ? <Link to={'/signin'} className='text-blue-500 underline'>Sign In</Link></p>
        </div>
      </div>
      <div className='flex-1 bg-orange-100'>
      </div>
    </div>
  )
}

export default Login