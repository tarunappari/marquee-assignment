import { useState } from 'react'
import { GlobalStyles } from './Globalstyles'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import LandingPage from './pages/LandingPage'
import { BrowserRouter } from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)


  return (
   <AppContainer>
       <GlobalStyles />
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<LandingPage /> } />
            <Route path='/bookshelf' element={<BookShelf /> } />
         </Routes>
      </BrowserRouter>
   </AppContainer>
  )
}

export default App

let AppContainer = styled.div`
  min-height: 100vh;
`
