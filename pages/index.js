import Head from 'next/head'
import Image from 'next/image'
import Profile from '../components/Profile'
import styles from '../styles/Home.module.css'
import  SwipeableTemporaryDrawer from '../components/navBar'
import Homescreen from '../components/Homepage'
import Homepage from '../components/Homepage'
 
export default function Home() {
  return (
    <div>
     
      <SwipeableTemporaryDrawer/>
      <Homepage />
      
      
    </div>
  )
}
