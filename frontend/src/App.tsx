import React from 'react';
import logo from './logo.svg';
import s from './S.png';
import './App.css';

function App() {

  return (


    <div>
      {/* Write your code after this line! */}
      <img src={s} className="img2"/>
      
      
      <textarea ng-model="myTextArea" id="myTextArea">Put your message here:)</textarea>

  
      
      <h1>Privacy</h1>
      <input type="radio" id="Radio2" name = "private"/>
      <label>private</label><br></br>
      <input type="radio" id="Radio3" name = "public"/> 
      <label>public</label><br></br> 

       <h2>Expiration</h2>
      <input type="radio" id="Radio4" name = "Never"/>
      <label>Never</label><br></br>
      <input type="radio" id="Radio5" name = "Time"/> 

       <label>Time</label>
       <select id="Radio5">
         <option value="Select">Select Time</option>
         <option value="hour">1 hour</option>
         <option value="hour">2 hour</option>
         <option value="hour">3 hour</option>
       </select>
       
       
     
      

      
        {/*} <input type="file"    name="filename"></input>
      <input type="submit"></input> */}
<br></br>

<label htmlFor="password" id="pass">password</label>
<input type="text" id="password"></input>

       
       {/*<h3>Password</h3><input type="text" id="Password"></input> */}

       
     { /*<label>Password (8 characters minimum):</label><input type="password" id="pass" name="password"></input>*/}
      <input type="submit" id="create"></input>
      
     {/* <h3>Encripted Link</h3> */}
    
      {/*
       
       <input type= "password" placeholder="Password"></input>
      <input type= "Expr" placeholder= "expiration"></input> */}
    </div>
    
  );
}

export default App;
