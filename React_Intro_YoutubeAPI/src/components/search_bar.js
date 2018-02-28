//import React and React.Component from node-modlules
import React, { Component } from 'react';

//class based component
class SearchBar extends Component {
	//reserved for initializing state variables
	//called automatically when we call an instance of a component
	constructor(props) {
		//calls parent method since component extension of a class has its own constructor
		super(props);
		//when we initialize state, we create a new object and assign it to this.state. obj that we pass contains propertiesthat we want to record in the state, in this case, "term"
		this.state = { term: ''};
	}

	render() {
		return (
			//className is used instead of class as it is a reserved word in REACT
			<div className="search-bar">
				<input
				//controlled field whose value is set by state
				value={this.state.term} 
				//event handler
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		//call onSearchTermChange with a new search term and that would call our searching function and fetch a new list of videos
		//method called from index.js
		this.props.onSearchTermChange(term);
	}
}


export default SearchBar;