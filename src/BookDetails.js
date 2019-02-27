import React from 'react';

const BookDetails = (props) => {
    const { book } = props;

    return (
        <div className={props.className}>
            <div>
                {book.imageLinks !== undefined &&
                    <img src={book.imageLinks.smallThumbnail} alt="" />
                }
            </div>
            <div>
                <h1>{book.title}</h1>
                <div>Author: {book.authors || 'N/A'}</div>
                <div>Publisher: {book.publisher || 'N/A'}</div>
                <a href={book.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">Get the book here</a>
            </div>
        </div>
    )
}

export default BookDetails;