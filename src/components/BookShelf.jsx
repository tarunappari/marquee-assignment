import { useEffect, useState } from "react";
import bookBg from '../assets/book-cover.jpg';


const BookShelf = () => {

    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        //here we are taking the books which are added by the user if there is any else we are giving empty array 
        //and setting them in the state
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    //here we are removing the book from bookshelf on clicking remove button by comparing with title and setting the 
    //updated books in the localstorage
    const removeFromBookshelf = (bookToRemove) => {
        const updatedBookshelf = bookshelf.filter(book => book.title !== bookToRemove.title);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div >
            <h1 style={{
                minWidth:'100%',
                textAlign:'center',
                marginTop:'1.5rem'
            }}>Book Shelf</h1>
            <div className="books-container">
                {bookshelf.length > 0 ? (
                    bookshelf.map((book, i) => (
                        <div className="book" key={i} style={{ backgroundImage: `url(${bookBg})`}} >
                            <h2>{book.title}</h2>
                            <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                            <button onClick={()=>removeFromBookshelf(book)}>remove the book</button>
                        </div>
                    ))
                ) : (
                    <div className="empty-shelf">
                        <h1>empty shelf</h1>
                    </div>
                )}
            </div>

        </div>
    )
}

export default BookShelf;