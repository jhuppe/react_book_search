import React, { Component } from 'react';
import './styles/SearchBar.scss';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '', errorMessage: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ searchQuery: e.target.value });
    };

    handleSubmit(e) {

        if (this.state.searchQuery !== '') {

            fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`)
                .then((response) => response.json())
                .then((data) => {
                    this.props.onSearchResult(data.items);
                });
            this.setState({ errorMessage: '' })
        }
        else {
            this.setState({ errorMessage: 'Error! Search parameter cannot be empty.' })
        }
    };

    render() {
        if (this.state.errorMessage === '')
            return (
                <div className="search">
                    <h1>Book Finder</h1>
                    <input className="search_field"
                        placeholder="Enter author name or book title ..."
                        type="text"
                        maxLength="50"
                        value={this.state.searchQuery}
                        required='required'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit} className="search_submit">Search</button>
                </div>
            )
        else {
            return (
                <div className="search">
                    <h1>Book Search</h1>
                    <input className="search_field"
                        placeholder="Enter author name or book title ..."
                        type="text"
                        maxLength="50"
                        value={this.state.searchQuery}
                        required='required'
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit} className="search_submit">Search</button>
                    <div className="error_message">{this.state.errorMessage}</div>
                </div>
            )
        }
    }
}