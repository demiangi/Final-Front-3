import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ContextProvider } from './components/utils/GlobalContext'
import './App.css'

function App() {
      return (
        <ContextProvider>
        <div className="App-div">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ContextProvider>
        )
};

export default App
