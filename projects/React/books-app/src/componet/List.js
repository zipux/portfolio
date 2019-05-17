import React, { Component } from 'react';
import Book from './Book';

class List extends Component {

    checkIfHasImage = (img) => {
        let thumbnail;

        if (img !== undefined) {
            thumbnail = img.thumbnail
        } else {
           thumbnail = "https://via.placeholder.com/180x180.png?text=NoImage"
        }
        return thumbnail;
    }

    render() {
       
        let books = this.props.items

    return (
        <div>
            {
                books.map(book => {
                    return (<Book 
                            key={book.volumeInfo.id}
                            title = {book.volumeInfo.title}
                            description = {book.volumeInfo.description}
                            categories = {book.volumeInfo.categories} 
                            thumbnail  = {this.checkIfHasImage(book.volumeInfo.imageLinks)}
                            infoLink = {book.volumeInfo.infoLink}
                            />);
                })
            }
        </div>
     )
    }
}

export default List;