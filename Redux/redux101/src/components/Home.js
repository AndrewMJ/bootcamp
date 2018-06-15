import React, {Component} from 'react';

// We need some glue! This component needs to know about the store. Just because it is 
// in the Provider , is not enough. React redux onlly exposes the store when it has to 
// for performance

// To accomplish this we  use the connect method from react-redux

import{connect} from 'react-redux'	

class Home extends Component{

	render(){
		return(
			<h1>{this.props.homeText}</h1>
		)
	}
}
// We have connect. But we need to get a way to the stuff in the store
// to the map to the props of this Component.
// It takes 1 param, state

function mapStateToProps(state){
	return{
		homeText: state.home
	}
}

//export default Home;

//containers is a component that knows about redux.
// connect returns a function, which exepects the component

export default connect(mapStateToProps)(Home)