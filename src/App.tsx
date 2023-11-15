import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/home-page/HomePage'
import MobilePage from './page/mobile-page/MobilePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='/mobile' element={<MobilePage/>}/>
				</Routes>
      </BrowserRouter>
    </>
  )
}

export default App
