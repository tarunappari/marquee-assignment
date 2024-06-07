import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BookShelf from "../components/BookShelf";
import { useNavigate } from "react-router-dom";
import bookBg from '../assets/book-cover.jpg';


const LandingPage = () => {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState('')
    let [loading, setLoading] = useState(false);
    let [searchDone,setSearchDone] = useState(false)

    let navigate = useNavigate()

    async function searchForBooks() {
        setSearchDone(true)
        setLoading(true)

        if (!search.trim()) {
            return;
        }

        const url = `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`;

        try {
            const response = await axios.get(url);
            setBooks(response.data.docs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        setSearch('')
        setLoading(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searchForBooks();
        }
    };

    const handleButtonClick = () => {
        searchForBooks();
    };

    const addToBookshelf = (book) => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        const updatedBookshelf = [...bookshelf, book];
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        setBooks(books.filter(b => b.title !== book.title)); // Remove the added book from the list
    };

    const isBookInBookshelf = (book) => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        return bookshelf.some(b => b.title === book.title);
    };


    return (
        <LandingPageContainer>
            <div className="input-container">
                <div className="input-div">
                    <input type="text" placeholder="Search for books" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                    <button onClick={handleButtonClick}>Search</button>
                </div>
                <div className="bookshelf-button">
                    <button onClick={() => navigate('/bookshelf')}>Bookshelf</button>
                </div>
            </div>
            {
                loading ? (<div className="loader-container">
                    <div className="loader"></div>
                </div>) : (
                    !searchDone ? (
                        <div className="loader-container">
                            <h1>Search for Books</h1>
                        </div>
                    ) : (
                        <div className="books-container">
                        {
                            books.length > 0 ? (
                                books.map((book, i) => {
                                    return (
                                        <div>
                                            {isBookInBookshelf(book) ? (
                                                <div className="book" key={i} style={{ backgroundImage: `url(${bookBg})` }}>
                                                    <h2>{book.title}</h2>
                                                    <p>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                                                    <p>Added to Shelf</p>
                                                </div>
                                            ) : (
                                                <div className="book" key={i} style={{ backgroundImage: `url(${bookBg})` }}>
                                                    <h2>{book.title}</h2>
                                                    <p>Author : {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
                                                    <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="loader-container">
                                  <h1>no books found</h1>
                                </div>
                            )
                        }
                    </div>
                    )
                )
            }
        </LandingPageContainer>
    )
}

export default LandingPage;


let LandingPageContainer = styled.div`
    min-height: 100vh;
    max-height: auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 9% 91%;
    .input-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        input{
            padding: 0.6rem 1.5rem;
            min-width: 70%;
            border-radius: 1.8rem;
            border: 0.2rem solid #222222;
            font-size: 0.9rem;
            background-color: #121212;
            color: #fff;
        }
        button{
            background-color: #4caf50;
            border: none;
            padding:0.6rem 1.5rem;
            border-radius: 1.2rem;
            color:  #fff;
            font-size: 0.9rem;
            cursor: pointer;
        }
        .input-div,.bookshelf-button{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .input-div{
            min-width: 50%;
        }
    }

    /* CSS for loading spinner */

    .loader-container{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
.loader {
  width: 55px;
  aspect-ratio: 1;
  --g1:conic-gradient(from  90deg at 3px  3px ,#0000 90deg,#fff 0);
  --g2:conic-gradient(from -90deg at 22px 22px,#0000 90deg,#fff 0);
  background:var(--g1),var(--g1),var(--g1), var(--g2),var(--g2),var(--g2);
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: l7 1.5s infinite;
}
@keyframes l7 {
  0%   {background-position:0    0   ,0 100%,100% 100% }
  25%  {background-position:100% 0   ,0 100%,100% 100% }
  50%  {background-position:100% 0   ,0 0   ,100% 100% }
  75%  {background-position:100% 0   ,0 0   ,0    100% }
  100% {background-position:100% 100%,0 0   ,0    100% }
}

`