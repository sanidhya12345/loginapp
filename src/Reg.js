import React, { useState } from 'react'
import "./Reg.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD6RK79EsTPdHhsM6Zk5vdVVwGmRSL9GRg",
    authDomain: "loginapp-13e1a.firebaseapp.com",
    projectId: "loginapp-13e1a",
    storageBucket: "loginapp-13e1a.appspot.com",
    messagingSenderId: "1017705017996",
    appId: "1:1017705017996:web:27bf7cba61ffafa4f801a9",
    measurementId: "G-HS0J4VPLNB"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

class Reg extends React.Component{
    state={
        username:"",
        mail:"",
        password:""
    }
    render(){
        const setFields=(e)=>{
            e.preventDefault();
            const {name,value}=e.target;
            this.setState({[name]:value});
        }
        const submit=async (e)=>{
            e.preventDefault();
            try {
              await createUserWithEmailAndPassword(auth,this.state.mail, this.state.password);
              // Registration successful, user created
            } catch (error) {
              console.log(error);
            }
        }
        return (
            <div className='reg'>
                 <form>
                    <div className='user'>
                        <label htmlFor="Username">Username</label>
                        <input type='text' name='username' value={this.state.username} onChange={setFields}></input>
                    </div>
                    <div className='email'>
                        <label htmlFor="Email">Email</label>
                        <input type='text' name='mail' value={this.state.mail} onChange={setFields}></input>
                    </div>
                    <div className='pass'>
                        <label htmlFor="Password">Password</label>
                        <input type='text' name='password' value={this.state.password} onChange={setFields}></input>
                    </div>
                    <button type="submit" className='lgbtn' onClick={submit}>SignUp</button>   
                </form>
            </div>
        )
    }
}
export default Reg;