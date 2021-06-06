import React from 'react';
import {motion} from 'framer-motion'
function Contact(){

    const containerVariances = {
        hidden: {
            opacity: 0
        }, 
        visible: {
            opacity: 1,
            transition: {duration: 1}
        },
        exit: {
            x:'-100vw',
            transition: {ease: 'easeInOut'}
        }
    }

    return(
        <motion.div
            variants={containerVariances}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="Image-grid">
            <h1> Contacto </h1>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
        </motion.div>
    )
}

export default Contact;