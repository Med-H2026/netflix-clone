import '../css/login.css'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'

const Login = () => {

  const [signInState,setSignInState] = useState('Sign In');
  const handleLogin = ()=>{
    if(signInState ==='Sign In') setSignInState('Sign Up')
    else setSignInState('Sign In')
  }

  return (
    <div className='login'>
      <img src={logo} alt="netflix logo" className="logo" />
      <div className='login-form'>
        <h1>{signInState}</h1>
        <form className="form-inputs">
            {signInState ==="Sign In" ? <></> : <input type="text" placeholder='Your Name' /> }            
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>{signInState}</button>
            <div className="form-help">
                <div className="remember">
                    <input type='checkbox'/>
                    <label htmlFor=''>Remember Me</label>
                </div>
                <p>Need Help?</p>
            </div>
        </form>
        <div className="form-switch">
            {signInState === 'Sign In' ? <p>New to Netflix? <span onClick={handleLogin}>Sign Up Now</span></p>
            : <p>Already have account? <span onClick={handleLogin}>Sign In Now</span></p> }         
            
        </div>
      </div>
    </div>
  )
}

export default Login
