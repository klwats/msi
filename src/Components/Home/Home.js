import { useState } from 'react'
import '../Home/Home.css'


const Home = () => {
    const allbuttons = ['TMJ', 'Neck', 'Shoulder', 'Upper Arm', 'leg', 'back']
    const displayButtons = allbuttons.map((button, index) => (
        <button key={index} className='button'>
            {button}
        </button>
    ))


    return (
        <main className='home'>
            {displayButtons}


        </main>
    )
}

export default Home;