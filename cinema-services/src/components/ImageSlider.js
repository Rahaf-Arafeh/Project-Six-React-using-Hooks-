import React, { useState } from 'react'
import '../styles/ImageSlider.css'
function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const [sliderData] = useState([
        {
            image: 'slider1.jpg'
        },
        {
            image: 'slider2.jpg'
        },
        {
            image: 'slider3.jpg'
        },
        {
            image: 'slider4.jpg'
        },
        {
            image: 'slider5.jpg'
        },
    ]);
    const length = sliderData.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    // if (Array.isArray(sliderData) || sliderData.length <= 0) {
    //     return null
    // }
    return (


        <section className='slider'>
            {/* className={index === current ? 'slide active' : 'slide'} */}
            <p className='arrows' onClick={prevSlide}><i className="fas fa-arrow-circle-left" ></i></p>
            {
                sliderData.map((slide, index) => {
                    return (
                        <div className='slide-img-container' key={index}>
                            {index === current && (

                                <img src={slide.image} alt='cinema images' className='image' />
                            )}
                        </div>
                    )
                })
            }
            <p className='arrows' onClick={nextSlide}><i className="fas fa-arrow-circle-right" ></i></p>
        </section >

    )
}

export default ImageSlider
