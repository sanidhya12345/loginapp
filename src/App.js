import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Reg from "./Reg";
function App() {
  const [name,setName]=useState("Login");
  const [prop,setProp]=useState(Login);
  const changeName=(e)=>{
     e.preventDefault();
     var {name,value}=e.target;
     let prop;
     if(name==='Login'){
       prop=Login;
       setProp(prop);
     }
     else{
       prop=<Reg></Reg>;
       setProp(prop);
     }
  }
  return (
    <div className="App">
      <h1>Login App</h1>
      <div className="container">
        <div className="header">
            <div className="login" >
               <button type="" onClick={changeName} name="Login" value={name} className="loginButton">Login</button>
            </div>
            <div className="registration">
            <button type="" onClick={changeName} name="SignUp" value={name} className="regButton">Reg</button>
            </div>
        </div>
        {prop}
      </div>
    </div>
  );
}

export default App;
