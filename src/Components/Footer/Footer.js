import React, { Component } from 'react';
import {motion} from 'framer-motion'
import './Footer.css'
function Footer() {
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
    return (

        <motion.div
            variants={containerVariances}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="main-footer">
            <div className="container fluid">
                <div className="row ulala">
                    <div className="col-md-3 col-sm-6 ">
                        <h4>
                            lorem ipsum
                    </h4>
                        <ul className="list-unstyled">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            lorem ipsum
                    </h4>
                        <ul className="list-unstyled">
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>
                            lorem ipsum
                    </h4>
                        <ul className="list-unstyled">
                            <li>9</li>
                            <li>10</li>
                            <li>11</li>
                            <li>12</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>
                            lorem ipsum
                    </h4>
                        <ul className="list-unstyled">
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-foot">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} La Quintana del Tordu - All Rights Reserved
                    </p>
                </div>
            </div>
        </motion.div>

    )
}

export default Footer