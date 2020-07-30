import React, { useState, FormEvent } from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';
import { start } from 'repl';
import { Redirect } from 'react-router-dom';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");


class message extends React.Component<any, any>  {

  constructor(props: any) {
    super(props);
    this.state = {
      postId: null,
      text: "",
    };

    this.handleClick= this.handleClick.bind(this)

  }

  componentDidMount() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json',);

    // Simple POST request with a JSON body using fetch
    fetch('http://localhost:8080/getPasteDetails?id=' + window.location.pathname.substring(9))
      
          .then(response => response.json())
          .then(data => this.setState(
            { 
              postId: data.id,
              text: JSON.stringify(data)
            }));
  }

  handleClick() {
    this.setState({
        toHomePage: true
    });
  }




  render(){

    const { postId } = this.state;
    const startTime= Date.now();
    const setExpiration = startTime

    if(this.state.toHomePage) {
      return <Redirect to="/" />
    }
                     
    return (

      <div>
        <div className="header">
          <img src={s} alt="secure share" className="img2" />
          <button onClick={this.handleClick} id="newFormButton"> + New</button>
        </div>
      

        <div className="view">
          
          <div className="Link">
            <label>
              Link:
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