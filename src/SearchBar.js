import React, { Component } from 'react';
// import './styles/SearchBar.scss';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {

        if (this.state.searchTerm !== '') {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.value}`)
                .then((response) => response.json())
                .then((data) => {
                    this.props.onSearchResult(data.items);
                });
        }
    }

    render() {
        return (
            <div className="search">
                <h1>Book Search</h1>
                <input className="search_field"
                    placeholder="Enter author name or book title"
                    type="text"
                    maxLength="50"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}