import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        // The following line assigns the correct context of 'this'
        // to the function onInputChange
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
            // When we use 'form' and do a 'submit', browser thinks we are trying to submit it.
            // To prevent this behavior, we use onSubmit and the callback function
            <form onSubmit = {this.onFormSubmit} className = "input-group" style = {{padding:'2%'}} >
                <input 
                    placeholder = "Get a five day forecast for your city."
                    className = "form-control"
                    value = {this.state.term}
                    onChange = {this.onInputChange}
                />
                <span className = "input-group-btn" >
                    <button type = "submit" className = "btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);