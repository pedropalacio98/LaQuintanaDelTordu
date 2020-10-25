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

    return (
        <motion.div
            variants={containerVariances}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="Image-grid">
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: '.3', delay: 0.3 }}
                exit={{ opacity: 0 }}
            >
                <GalleryItem imgpath={Screenshot_3} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeIn", duration: '.3', delay: 0.6 }}
                exit={{ opacity: 0 }}
            >
                <GalleryItem imgpath={Screenshot_4} />
            </motion.div> */}

            <AutoplaySlider
                cssModule={AwesomeSlider}
                play={true}
                interval={1000}>
                <div data-src={Screenshot_3} />
                <div data-src={Screenshot_4} />
            </AutoplaySlider>

        </motion.div>
    )
}

export default CustomSlider