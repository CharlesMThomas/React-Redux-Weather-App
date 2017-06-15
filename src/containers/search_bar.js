import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: null };
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Todo: Need to make an API request to retrieve weather data
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder = 'Get a five-day forecast in your favorite cities'
                    className="form-control"
                    value = {this.state.term}
                    onChange = {event => this.setState({ term: event.target.value })}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}