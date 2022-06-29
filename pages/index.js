import React, { useState, createContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../components/Homepage'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'

export const AppProvider = createContext(null)

export default function Home() {
  const [application, setApplication] = useState([
    { title: 'FIFA22', img: 'fifa.jpeg', id: 1 ,row: 1},
    { title: 'FIFA22', img: 'fifa.jpeg', id: 2 ,row: 1},
    // { title: 'FIFA22', img: 'fifa.jpeg', id: 3 ,row: 1},
    { title: 'FIFA22', img: 'fifa.jpeg', id: 4 ,row: 2},
    { title: 'FIFA22', img: 'fifa.jpeg', id: 5 ,row: 2},
    // { title: 'FIFA22', img: 'fifa.jpeg', id: 6 ,row: 2},
    // { title: 'FIFA22', img: 'fifa.jpeg', id: 7 ,row: 3},
    // { title: 'FIFA22', img: 'fifa.jpeg', id: 7 ,row: 3}
  ])


  return (
    <div style={{ height: '100vh', width: '100%', overflowY: 'hidden !important' }}>

      <AppProvider.Provider value={{ application, setApplication }} >
        <Profile />
        <Homepage />
      </AppProvider.Provider>
    </div>
  )
}
