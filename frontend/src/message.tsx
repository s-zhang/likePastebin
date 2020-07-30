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
     
  componentDidMount() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json',);

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('http://localhost:8080/getPasteDetails?id=Nate')
      
          .then(response => response.json())
          .then(data => this.setState(
            { 
              postId: data.id,
              text: JSON.stringify(data)
            }));
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
              <h5 id="textInfo">{ this.state.text }</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default message;