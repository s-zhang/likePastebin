import React from 'react';
//import logo from './logo.svg';
import s from './S.png';
import './App.css';

function App() {

  return (


    <div>
      {/* Write your code after this line! */}
      
      <div className="header">
        <img src={s} alt="secure share" className="img2"/>
        <button id="newFormButton"> + New</button>
      </div>
      <div className="body">
        <h1>Title</h1>
        <input id="myTitle"></input>
        <h1>Text</h1>
        <textarea ng-model="myTextArea" id="myTextArea" placeholder="Put your message here:)"></textarea>
        <br></br>
        <input type="file" id="myFile" name="filename"></input>
      </div>
      <div className="settings">
        <div className="privacy">
          <h1>Privacy</h1>
          <div className="privacyChoices">
            <input type="radio" id="Radio2" name = "private"/>
            <label>private</label><br></br>
            <input type="radio" id="Radio3" name = "public"/> 
            <label>public</label><br></br> 
          </div>
        </div>
        <div className="expiration">
          <h1>Expiration</h1>
          <div className="expireChoices">
            <input type="radio" id="Radio4" name = "Never"/>
            <label>Never</label><br></br>
            <input type="radio" id="Radio5" name = "Time"/> 
            <label>Time</label><input type="text" id="dropdown1" />
          </div> 
        </div>
      </div>
      <br></br>
      <input type="submit" id="create"></input>
    </div>
    
  );
}

export default App;
