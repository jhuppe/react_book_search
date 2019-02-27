import React from 'react';
import BookDetails from './BookDetails';

const BookList = (props) => {
    return (
        <div>
            {props.bookList.map((book) => {
                return (
                    <BookDetails key={book.id} book={book.volumeInfo} className="Book" />
                )
            })
            }
        </div>
    );
}

export default BookList;