import React, { useState, createContent } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Homepage from '../components/Homepage'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'

export const AppProvider = createContent()

export default function Home() {
const [application, setApplication] = useState([
  {title:'FIFA22',img:'fifa.jpeg',id:1},
  {title:'FIFA22',img:'fifa.jpeg',id:2},
  {title:'FIFA22',img:'fifa.jpeg',id:3},
  {title:'FIFA22',img:'fifa.jpeg',id:4},
  {title:'FIFA22',img:'fifa.jpeg',id:5},
  {title:'FIFA22',img:'fifa.jpeg',id:6},
  {title:'FIFA22',img:'fifa.jpeg',id:7}
])


  return (
    <AppProvider.Provider value={{}} style={{height:'100vh', width:'100%',overflowY:'hidden'}}>
      <Profile />
      <Homepage />
    </AppProvider.Provider>
  )
}
