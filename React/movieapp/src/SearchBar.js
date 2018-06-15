import React, {Component} from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
	}

	handleMovieSubmit(event){
		event.preventDefault();
		const searchTerm = event.target[0].value;
		console.log(searchTerm);
		// this.props.searchFunction(searchTerm);
		this.props.history.push(`/search/${searchTerm}`);
	}

	render(){
		return(
		<div>
			<form onSubmit={this.handleMovieSubmit}>
				<input type="text"/>
				<button className="btn btn-primary" type="submit" >Movie Search</button>
			</form>
		</div>
		)
	}
}
export default SearchBar;