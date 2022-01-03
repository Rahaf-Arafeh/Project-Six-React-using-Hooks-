import React from 'react'
import '../styles/OurPackage.css'
function OurPackage() {
    return (
        <div className='cinema-package'>
            <h1>We Offer With Each Booking</h1>
            <div className='our-package-container'>
                <div className='card text-center'>
                    <img src='popcorn.jpg' alt='popcorn' />
                    <p>PopCorn</p>
                </div>
                <div className='card text-center'>
                    <img src='dontus.jpg' alt='donuts' />
                    <p>Donuts</p>
                </div>
                <div className='card text-center'>
                    <img src='ships.jpg' alt='ships' />
                    <p>Ships</p>
                </div>
            </div>
        </div>
    )
}

export default OurPackage
