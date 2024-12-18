import React from 'react'
import bg from '../assets/bgimage.png'
const HeroSection = () => {
  return (
    <main style={{
        backgroundImage:`url(${bg})`,
        backgroundSize:'contain',
        backgroundPosition:'center',
        height:'100vh',
        width:'100%'
    }
    }>

        <section className='bg-green-100 text-black font-bold text-4xl'>
            <h1>Welcome to Hotel Hastick</h1>
        </section>
    </main>
  )
}

export default HeroSection