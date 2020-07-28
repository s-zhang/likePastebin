import React, { useState, FormEvent } from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';
import { start } from 'repl';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
require('datejs');
const date = new Date();
console.log(date);

class message extends React.Component<any, any>  {

  constructor(props: any) {
    super(props);
    this.state = {
      postId: null,
      text: "",
    };

  }
     
  
  render(){

    const { postId } = this.state;
    const startTime= Date.now();
    const setExpiration = startTime
                     
    return (

      <div>
        <div className="header">
          <img src={s} alt="secure share" className="img2" />
          <button id="newFormButton"> + New</button>
        </div>
      

        <form action="">
          <div className="body">
            <h1>Title</h1>
            <input id="myTitle"></input>
            
            <h1>Text</h1>
            <textarea ng-model="myTextArea" id="myTextArea" placeholder="Put your message here:)" defaultValue={ this.state.text }></textarea>
            <br></br>
            <h3>Link</h3><input type="text" id= "link"></input>

            </div>
            </form>
            

            </div>
            

          

    );
  }
};

export default message;