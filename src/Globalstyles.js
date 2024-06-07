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

    @media only screen and (max-width:820px){
        .books-container{
        grid-template-columns: 1fr 1fr 1fr;
        .book {
            min-height: 50vh;
            max-height: 50vh;
            button {
            padding:0.6rem 1.5rem;
            }
        }
    }
    }

    @media only screen and (max-width:670px){
        .books-container{
        grid-template-columns: 1fr 1fr;
        .book {
            min-height: 50vh;
            max-height: 50vh;
            font-size: 90%;
            button {
            padding:0.5rem 1.4rem;
            font-size: 90%;
            }
        }
    }
}

@media only screen and (max-width:470px){
        .books-container{
        grid-template-columns: 1fr 1fr;
        .book {
            min-height: 40vh;
            max-height: 40vh;
            font-size: 70%;
            button {
            padding:0.4rem 1.3rem;
            font-size: 70%;
            }
        }
    }
}

@media only screen and (max-width:390px){
        .books-container{
        grid-template-columns: 1fr;
        .book {
            min-height: 40vh;
            max-height: 40vh;
            font-size: 70%;
            button {
            padding:0.4rem 1.3rem;
            font-size: 70%;
            }
        }
    }
}

::-webkit-scrollbar {
  width: 0.3rem;
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: 10px;
}

`