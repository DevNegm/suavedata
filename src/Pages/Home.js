import React, { useEffect } from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import Services from '../components/Services'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Header/>
        <AboutUs/>
        <Services/>
    </div>
  )
}
