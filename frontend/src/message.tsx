import React from 'react';
import s from './S.png';
import './App.css';
import { Redirect } from 'react-router-dom';
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");


class Message extends React.Component<any, any>  {
  textArea: any;

  constructor(props: any) {
    super(props);
    this.state = { 
      data: {
        title:"",
        message:"",
        expiration:""
      }
    };

    this.handleClick= this.handleClick.bind(this)
  }

  componentWillMount() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json',);

    fetch('http://localhost:8080/getPasteDetails?id=' + window.location.pathname.substring(9))
      
          .then(response => response.json())
          .then(data => this.setState(
            { 
            
              data: data
            }));
  }

  handleClick() {
    this.setState({
        toHomePage: true
    });
  }

  copyLink(){
    const copyText = this.textArea
    copyText.select()
    document.execCommand('copy')
  }

  render(){

    if(this.state.toHomePage) {
      return <Redirect to="/" />
    }
                     
    return (

      <div>
        <div className="header">
          <img src={s} alt="secure share" className="img2" />
          <button id="newFormButton"> + New</button>
        </div>
      
        <div className="view">
          
          <div className="LinkView">
            <label>
              Link:
              <input type="text" id="link" ref={(textarea) => this.textArea = textarea} value="placeholder"></input>
              <button onClick={() => this.copyLink()} id="copy">Copy Link</button>
            </label>
          </div>

          <div className="info">
            <div className="infoTop">
              <p className="infoDescribe" id="privacyInfo">Private</p>
              <p className="infoDescribe right" id="expireCountdown">{this.state.data.expiration}</p>
              <p className="infoDescribe right">Expires: </p>
            </div>
            <div className="infoContent">
              <h1 id="titleInfo">{this.state.data.title}</h1>
              <h5 id="textInfo">{ this.state.data.message }</h5>
            </div>
          </div>

        </div>
      </div>
    );
  }
};

export default Message;