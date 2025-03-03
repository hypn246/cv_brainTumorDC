import React from 'react'

const page = () => {
  return (
    <>
    <div className='center'>
        <div className='gd14 login center flex-col bg-transparent bg-indigo-950 my-10 p-10 rounded-2xl'>
            <h1>Login</h1>
            <div className='center flex-col'>
                <form action="POST" className='upform flex-col'>
                    <label htmlFor="">User</label>
                    <input type="text" name="name" id="" required placeholder='User name or email...'
                        />
                    <label>Password</label>
                    <input type="password" name="pass" id="pass" required placeholder='Type your password...'
                        />
                    <p className='py-5'><a href="/forget" className='text-emerald-500 underline'>Forget you password </a>or <a href="/signup" className='text-emerald-500 underline'>sign up</a></p>
                </form>
                <div className='gd3 btn-color w-fit'>
                    <button type="submit" className='btn-pale'>Login</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page