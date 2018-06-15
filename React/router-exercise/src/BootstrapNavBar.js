import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <ul className="nav navbar-nav">
		    	<li><Link to="/">Home</Link></li>
		      	<li><Link to="/About">About</Link></li>
		      	<li><Link to="/Images">Images</Link></li>
		      	<li><Link to="/Weather">Weather</Link></li>
		      	<li><Link to="/MayorMessage">Mayor Message</Link></li>
		    </ul>
		    
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar