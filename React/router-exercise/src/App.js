import React, { Component } from 'react';
import './App.css';
import BootstrapNavBar from './BootstrapNavBar'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Weather from './Atlanta';
import Images from './Images'
import MayorMessage from './MayorMessage';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <BootstrapNavBar />
          <div className="container main">
            <h1>Main App</h1>
            <Route exact path="/" render={Home}/>
            <Route path="/About" render={()=>{return(<About />)}}/>
            <Route path="/Images" render={()=><Images atlImages={atlImages}/>}/>
            <Route path="/Weather" render={()=>{return(<Weather />)}}/>
            <Route path="/MayorMessage" render={()=>{return(<MayorMessage />)}}/>             
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
