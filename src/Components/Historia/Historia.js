import React from 'react';
import { motion } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Historia.css'
import Screenshot_5 from '../../Data/Screenshot_5.png'
import Screenshot_6 from '../../Data/Screenshot_6.png'
import { Image, Row, Col, Container } from 'react-bootstrap'

const containerVariances = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.7 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

function Historia() {


    return (
        <motion.div
            variants={containerVariances}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="molde"
        >
            <Container>
                <h1 className="Header"> Historia </h1>
                <Row >
                    <Col xs={12} md={6} >
                        <p >Pellentesque habitant morbi tristiq turpis egestas. s. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. VestiVestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                        <Image src={Screenshot_6} alt="Sample" fluid />
                    </Col>
                    <Col xs={12} md={6} >
                        <Image src={Screenshot_5} alt="Sample" fluid />
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    </Col>

                </Row>
            </Container>
        </motion.div>
    )
}

export default Historia;