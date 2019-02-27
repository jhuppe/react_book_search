import React from 'react';
import './styles/BookDetails.scss';
import noImage from './images/noImage.png';

const BookDetails = (props) => {
    const { book } = props;

    return (
        <div className="book">
                {book.imageLinks !== undefined &&
                    <img src={book.imageLinks.smallThumbnail || noImage} alt=""  />
                }
                <div className="title">{book.title}</div>
                <div className="author">Author: {book.authors || 'N/A'}</div>
                <div className="publisher">Publisher: {book.publisher || 'N/A'}</div>
                <a href={book.canonicalVolumeLink} target="_blank" rel="noopener noreferrer" className="bookLink">More Details</a>
        </div>
    )
}

export default BookDetails;