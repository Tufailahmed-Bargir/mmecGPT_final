"use client"
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/navbar'
import Searchbar from './components/searchbar'
// import Hero from '@/app/components/hero'
import Cards from './components/card'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
 
// import App from './components/App'
import Heros from './components/hero'

export default function Home() {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.min.js')
  })
  return (
    <main >
      <NavBar/>
      <Heros/>
      <Cards/>
      <Searchbar/>
     
    </main>
  )
}
