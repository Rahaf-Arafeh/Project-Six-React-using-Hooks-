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
            <h1 className='grid-area-heading'>Welcome To CIMA</h1>
            <div className='movies-offered'>
                <div className='box1'><h1>Welcome to CIMA a place where you can bring cinema to home </h1>
                    <h1>We seek to bring joy to you home</h1></div>
                <div className='box2'><img src='hero1.png' /></div>
            </div>
            <section className='image-slider'>
                <ImageSlider />
            </section >
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
