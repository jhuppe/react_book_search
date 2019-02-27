import React from 'react';
import BookDetails from './BookDetails';

const BookList = (props) => {
    return (
        <div className="books">
            {props.bookList.map((book) => {
                return (
                    <BookDetails key={book.id} book={book.volumeInfo}  />
                )
            })
            }
        </div>
    );
}

export default BookList;