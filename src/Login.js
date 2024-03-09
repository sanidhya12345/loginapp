import React from 'react'
import "./Login.css";
function Login(){
    return(
        <div className='login_box'>
            <form>
                <div className='user'>
                    <label htmlFor="Username">Username</label>
                    <input type='text'></input>
                </div>
                <div className='pass'>
                    <label htmlFor="Password">Password</label>
                    <input type='text'></input>
                </div>
                <button type="submit" className='lgbtn'>Login</button>
                
            </form>
        </div>
    )
}

export default Login;