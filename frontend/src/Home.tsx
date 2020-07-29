import React, { useState, FormEvent } from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';
import { start } from 'repl';
import { Redirect } from 'react-router-dom';
const moment = require("moment")
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");

class Home extends React.Component<any, any>  {

  constructor(props: any) {
    super(props);
    this.state = {
      postId: null,
      title: "",
      text: "",
      privacy: "",
      expiration: "",
      expireNumber: "",
      expireUnit: "minute",
      toMessagePage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  Submit(){
    let expireAt
    if(this.state.expiration==="never"){
      expireAt= null
    }
    else{
      let date: any = Date.now()
      switch (this.state.expireUnit) {
        case "minute":
          date = moment(date).add(this.state.expireNumber, 'm')
          break;
        case "hour":
          date = moment(date).add(this.state.expireNumber, 'h')
          break;
        case "day":
          date = moment(date).add(this.state.expireNumber, 'd')
            break;
        case "week":
          date = moment(date).add(this.state.expireNumber, 'w')
            break;
        case "year":
          date = moment(date).add(this.state.expireNumber, 'y')
            break;
        default: break; }
      expireAt=date.toString()
    }
    console.log(expireAt)
    const data = { 
      title: this.state.title,
      text: this.state.text,
      privacy: this.state.privacy,
      expireAt: expireAt,
    }
  }
  
  handleClick() {
  
    this.setState({
        toMessagePage: true
    });
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

    if(this.state.toMessagePage) {
        return <Redirect to="/message" />
    }

    const { postId } = this.state;

    
    return (

      <div>
        <div className="header">
          <img src={s} alt="secure share" className="img2" />
          <button id="newFormButton"> + New</button>
        </div>

        <form onSubmit={ e => {	
          e.preventDefault()	
          this.Submit()	
        }}>
          <div className="body">
            <h1>Title</h1>
            <input id="myTitle" onChange={e => this.setState({	
              title: e.target.value	
            })} value={ this.state.title }></input>
            
            <h1>Text</h1>
            <textarea ng-model="myTextArea" id="myTextArea" placeholder="Put your message here:)" defaultValue={ this.state.text }	
            onChange={e => this.setState({text: e.target.value})} value={ this.state.text }></textarea>
            <br></br>
            
            <input type="file" id="myFile" name="filename"></input>
          </div>

          <div className="settings">
            
            <div className="privacy">
              <h1>Privacy</h1>
              <label className="privacyChoices">
                <input
                  type="radio"
                  name="privacy"
                  value="private"
                  className="PrivacyFormInput"	
                  onChange={e => this.setState({privacy: e.target.value})} 	
                  checked={ this.state.privacy==="private" } />
                Private
              </label>
              <br/>
              <label className="privacyChoices">
                <input
                  type="radio"
                  name="privacy"
                  value="public"
                  className="PrivacyFormInput"	
                  onChange={e => this.setState({privacy: e.target.value})} 	
                  checked={ this.state.privacy==="public" } />
                Public
              </label>
            </div>

            <div className="expiration">
              <h1>Expiration</h1>
              <label className="expireChoices">
                  <input
                    type="radio"
                    name="expire"
                    value="never"
                    className="expirationFormInput"	
                    onChange={e => this.setState({expiration: e.target.value})} 	
                    checked={ this.state.expiration==="never" } />
                  Never
              </label>
              <br/>
              <label className="expireChoices">
                <input
                  type="radio"
                  name="expire"
                  value="timed"	
                  className="expirationFormInput"	
                  onChange={e => this.setState({expiration: e.target.value})} 	
                  checked={ this.state.expiration==="timed" } /> 
                Set Expiration: 
                <input type="text" id="count" onChange={e => 	
                  {	
                    if( !isNaN(Number(e.target.value)) ){	
                      this.setState({expireNumber: e.target.value})	
                    }	
                  }} 	
                  value={ this.state.expireNumber } 	
                  />	
                <select name="dropdown" id="dropdown" 	
                onChange={e => this.setState({expireUnit: e.target.value})} value={ this.state.expireUnit }>
                  <option value="minute">minute(s)</option>
                  <option value="hour">hour(s)</option>
                  <option value="day">day(s)</option>
                  <option value="week">week(s)</option>
                  <option value="year">year(s)</option>
                </select>
              </label>
            </div>
          </div>

          <br></br>
          <input onClick={this.handleClick} type="submit" id="create" ></input>
        </form>
      </div>
      

    );
  }
};

export default Home;