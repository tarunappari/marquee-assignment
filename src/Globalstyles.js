import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #000000;
    color: #fff;
}

input:focus{
            outline: none;
        }

        .books-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 3rem;
        gap: 2rem;
        .book {
            min-height: 50vh;
            max-height: 50vh;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            padding: 1rem;
            margin: 1rem 0;
            color: #222222;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-top-left-radius:2rem;
            border-bottom-right-radius: 2rem;
            h2, p {
                margin: 0;
            }
            button {
                background-color: #4caf50;
            border: none;
            padding:0.6rem 1.5rem;
            border-radius: 1.2rem;
            color:  #fff;
                cursor: pointer;
                align-self: flex-start;
            }
        }
    }

`