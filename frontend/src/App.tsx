import React, { useState, FormEvent } from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';
import { start } from 'repl';
import { BrowserRouter, Route } from 'react-router-dom';
import message from './message';
import Home from './Home';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");
require('datejs');
const date = new Date();
console.log(date);

class App extends React.Component<any, any>  {

  constructor(props: any) {
    super(props);
    this.state = {
      postId: null,
      text: "",
    };

  }
  
  App() {
    //encrypt whatever is in the text box
    
    const element = (document.getElementById('myTextArea') as HTMLInputElement).value;
    /*alert(element);
    let keyUtf8 = CryptoJS.enc.Utf8.parse('my-secret-key@123')
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(element,keyUtf8,{
      mode: CryptoJS.mode.ECB,
      keySize: 128,
      });
    //log encrypted data
    alert('Encrypt Data -')
    alert(ciphertext);
  
    // Decrypt
    var decryptedBytes = CryptoJS.AES.decrypt(ciphertext, keyUtf8,{
      mode: CryptoJS.mode.ECB,
      keySize: 128,
      });
    var decryptedData = decryptedBytes.toString();
  
    //log decrypted Data
    alert('decrypted Data -')
    alert(decryptedData); */
    
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

    return(
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/message" component={message} />
      </BrowserRouter>
    );
  }
};

export default App;