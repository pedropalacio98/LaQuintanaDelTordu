import React from 'react';
import "./Slider.css"
import { motion } from 'framer-motion'
import Slide from "./Slide"
import Screenshot_3 from '../../Data/Screenshot_3.png'
import Screenshot_4 from '../../Data/Screenshot_4.png'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { Slider } from '@material-ui/core';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Gallery from 'react-photo-gallery';




function CustomSlider() {

    const containerVariances = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { duration: 1 }
        },
        exit: {
            opacity: 0
        }
    }

    const AutoplaySlider = withAutoplay(AwesomeSlider)
    AOS.init({
        duration: 1000
    })

    const photos = [
        {
          src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
          width: 1,
          height: 1
        },
        {
          src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
          width: 3,
          height: 4
        },
        {
          src: "https://source.unsplash.com/PpOHJezOalU/800x599",
          width: 4,
          height: 3
        },
        {
          src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
          width: 4927,
          height: 1000
        },
        {
          src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
          width: 4,
          height: 3
        }
      ];

    return (
        <div>
            <div>
                <motion.div
                    variants={containerVariances}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="Image-grid">
                    <AutoplaySlider
                        cssModule={AwesomeSlider}
                        play={true}
                        interval={3000}>
                        <div data-src={Screenshot_3} />
                        <div data-src={Screenshot_4} />
                    </AutoplaySlider>

                </motion.div>
            </div>
            <div className='col'>
                <div className='row Welcome' data-aos="fade-up">
                    <div className='col col-lg-3 col-md-6'>
                        <p>Lorem</p>
                    </div>
                    <div className='col col-lg-3 col-md-6'>
                        <p>Ipsum</p>
                    </div >
                    <div className='col col-lg-3 col-md-6'>
                        <p>HOLAAAA</p>
                    </div>
                    <div className='col col-lg-3 col-md-6'>
                        <p>HOLAAAA</p>
                    </div>
                </div>
                <div className='row Welcome' data-aos="fade-up">
                    <div className='col col-lg-3 col-md-6' >
                        <p>HOLAAAA</p>
                    </div>
                    <div className='col col-lg-3 col-md-6' >
                        <p>HOLAAAA</p>
                    </div >
                    <div className='col col-lg-3 col-md-6'>
                        <p>HOLAAAA</p>
                    </div>
                    <div className='col col-lg-3 col-md-6' >
                        <p>HOLAAAA</p>
                    </div>
                </div>
                <div className='row Galeria' data-aos="fade-up">
                    <div className='col col-lg-12 col-md-12' >
                        <Gallery photos={photos} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomSlider