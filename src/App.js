import React, { Component } from 'react';
import './styles/App.scss';

import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    }
  }

  handleBookList = (bookList) => {
    this.setState({ bookList });
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearchResult={this.handleBookList} />
        <BookList bookList={this.state.bookList} />
      </div>
    );
  }
}

export default App;
