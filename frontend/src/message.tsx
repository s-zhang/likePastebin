import React, { useState, FormEvent } from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';
import { start } from 'repl';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
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
      

        <div className="view">
          
          <div className="encryptionLink">
            <label>
              Encrypted Link:
              <input type="text" id="link"></input>
              <button id="copy">Copy Link</button>
            </label>
            
          </div>

          <div className="info">
            <div className="infoTop">
              <p className="infoDescribe" id="privacyInfo">Private</p>
              <p className="infoDescribe right" id="expireCountdown">(expiration countdown)</p>
              <p className="infoDescribe right">Expires: </p>
            </div>
            <div className="infoContent">
              <h1 id="titleInfo">Title</h1>
              <h5 id="textInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default message;