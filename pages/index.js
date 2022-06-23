import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navBar'
import Homescreen from '../components/homescreen'
export default function Home() {
  return (
    <div>
<Navbar />
<Homescreen />
</div>
    
  )
}
