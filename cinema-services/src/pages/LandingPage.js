import React, { useEffect } from 'react'
import ImageSlider from '../components/ImageSlider'
import '../styles/LandingPage.css'
function LandingPage() {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])
    return (
        <>
            <section className='hero'>
                <div className='home-bg-content'>
                    <p>Experience the cinema in your home </p>
                    <p>with your family and loved ones</p>
                    <button>Book Now</button>
                </div>
            </section>
            <section className='image-slider'>
                <ImageSlider />
            </section >
            {/* <section className='movies-offered'>
                <h1 className='header'>Movies We Offered</h1>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
                <div className='box5'></div>
                <div className='box6'></div>
                <div className='box7'></div>

            </section> */}
            <section className='about-us'>
                <div className='about-us-content'>
                    <h1>Who We Are ?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</p></div>
                <div className='about-us-image'><img src='about.png' alt='about image' /></div>
            </section>
        </>
    )
}

export default LandingPage
