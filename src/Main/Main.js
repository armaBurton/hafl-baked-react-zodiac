import React from 'react'
import backgroundImg from '../background.png'
import { zodiac } from '../data'
import ZodiacCard from '../ZodiacCard/ZodiacCard'
import './Main.css'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* import the ZodiacCard component */}
      {/* get the zodiac array from props */}
      {zodiac.map((item) => (
        <ZodiacCard key={item.name} {...item} />
      ))}
      {/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}
    </main>
  )
}
