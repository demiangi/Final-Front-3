import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//components
import Contact from './routes/Contact'
import Dentist from './components/Dentist.jsx'
import Favorite from './routes/Favorite'
import Home from './routes/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='contact' element={<Contact />} />
          <Route path='dentist' element={<Dentist />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='home' element={<Home />} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
);
