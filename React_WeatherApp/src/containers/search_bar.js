//import react component from node-modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

	//set up state inside constructor
	constructor(props) {
		super(props);
		//set state as blank/completely empty
		this.state = { term : '' };

		//the instance of searchBar (this) has a function called onInputChange. bind that 
		//function to "this" searchBar then replace onInputChange with this new bound instance 
		//of "this" function. Basically overriding this local method
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	//event handler / change handler
	onInputChange(event) {
		//set the state to the value of the searchBar
		this.setState({term: event.target.value});
	}

	onFormSubmit(event) {
		//will prevent the default behavior of the form where this event handler was used
		event.preventDefault();

		//we need to go and fetch weather data
		//call action creator
		this.props.fetchWeather(this.state.term);
		//make state of term to empty string which will cause the component to rerender
		this.setState({term: ''});
	}

	//render method
	render() {
		return (
			//without the onSubmit function, this input and form will submit to nothing, that will cause to make the form reload.
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecase in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
 }


 function mapDispatchToProps(dispatch) {
 	return bindActionCreators({ fetchWeather }, dispatch);
 }

 export default connect(null, mapDispatchToProps)(SearchBar);