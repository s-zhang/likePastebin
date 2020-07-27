import React, { useState, FormEvent } from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';


function App() {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState<File>()
  const [privacy, setPrivacy] = useState('private')
  const [expiration, setExpiration] = useState('never')


  const submit=(e:FormEvent)=>{
    
  }
  

  return (

    <div>
      <div className="header">
        <img src={s} alt="secure share" className="img2" />
        <button id="newFormButton"> + New</button>
      </div>

      <form action="">
        <div className="body">
          <h1>Title</h1>
          <input id="myTitle" onChange={(e) => setTitle(e.target.value)} value={title}></input>
          
          <h1>Text</h1>
          <textarea ng-model="myTextArea" id="myTextArea" placeholder="Put your message here:)"
          onChange={(e) => setText(e.target.value)} value={text}></textarea>
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
                checked={privacy === "private"}
                onChange={(e) => setPrivacy(e.target.value)}
                className="PrivacyFormInput" />
              Private
            </label>
            <br/>
            <label className="privacyChoices">
              <input
                type="radio"
                name="privacy"
                value="public"
                checked={privacy === "public"}
                onChange={(e) => setPrivacy(e.target.value)}
                className="PrivacyFormInput" />
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
                  checked={expiration === "never"}
                  onChange={(e) => setExpiration(e.target.value)}
                  className="expirationFormInput" />
                Never
            </label>
            <br/>
            <label className="expireChoices">
              <input
                type="radio"
                name="expire"
                value="time"
                checked={expiration === "timed"} /*NEED TO ADD TIME CHOICE and dropdown for min/days/etc*/
                onChange={(e) => setExpiration(e.target.value)}
                className="expirationFormInput" />
              Time
            </label>
          </div>
        </div>

        <br></br>
        <input type="submit" id="create"></input>
      </form>
    </div>

  );
}

export default App;
