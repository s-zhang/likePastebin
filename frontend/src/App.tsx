import React, { useState, FormEvent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import message from './message';
import Home from './Home';


class App extends React.Component<any, any>  {
 
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