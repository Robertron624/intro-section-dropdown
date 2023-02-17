import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main className='container'>
        <div className="intro-content">
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className='learn-more'>Learn more</button>
          <div className="partners flex align-center justify-between">
            <img src="client-databiz.svg" alt="databiz logo" />
            <img src="client-audiophile.svg" alt="audiophile logo" />
            <img src="client-meet.svg" alt="meet logo" />
            <img src="client-maker.svg" alt="maker logo" />
          </div>
        </div>
        <div className="hero-container">
          <img src="image-hero-desktop.png" alt="image hero" />
        </div>
      </main>
    </>
  )
}

export default App
