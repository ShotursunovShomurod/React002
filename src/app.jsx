import { useState } from 'preact/hooks'
import Header from './components/Header/Header'
import "./sass/main.scss"
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Clean from './components/Clean/Clean'
import Testimonials from './components/Testimonials/Testimonials'
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'

export function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Products/>
    <Clean/>
    <Testimonials/>
    <Popular/>
    <Footer/>
    </>
  )
}
