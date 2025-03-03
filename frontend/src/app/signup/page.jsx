import React from 'react'

const Signup = () => {
  return (
    <>
    <div className='center p-10'>
        <div className='center flex-wrap justify-between gd6 rounded-2xl p-10 w-[80%]'>
            <div className='center flex-col w-[40%] h-full '>
                <h1>Sign up</h1>
                <p>Within a minute!</p>
            </div>
            <div className='text-black center w-[60%]'>
                <form className='upform w-full' method="POST"
                encType='multipart/form-data'>
                    <label htmlFor="">User name</label>
                    <input type="text" name="name" id="" required placeholder='User name...'
                            />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required placeholder='Email...'
                            />
                    <label>Password</label>
                        <input type="password" name="pass" id="pass" required placeholder='Type your password...'
                        />
                    <label htmlFor="re-pass">Retype your password</label>
                    <input type="password" name="re-pass" id="" placeholder='Retype your password...'/>
                    <div className='flex my-5'>
                        <input type="checkbox" name="" id="" required/>
                        <span className='mx-2'>Agreed with our <a href="/" className='text-emerald-500 underline'>Privacy right</a></span>
                    </div>
                    <button type="submit"className='gd10 btn-color'><p className='p-3'>Submit</p></button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup