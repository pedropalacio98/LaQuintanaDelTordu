import React from 'react';
import { motion } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Historia.css'
import luis from '../../Data/luis.jpg'
import chrono1 from '../../Data/viejospe-1.jpg'
import { Chrono } from 'react-chrono'
import { Image, Row, Col, Container } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css';

const containerVariances = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 1 }
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}
function Historia() {

    const items = [
        { title: "Año 1920" },
        { title: "Año 1930" },
        { title: "Año 1960" },
        { title: "Año 1980" },
        { title: "Año 2000" }
    ];

    return (
        <motion.div
            variants={containerVariances}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="molde"
        >
            <Container>
                <div className='container'>
                    <h1 className="Header"> <strong>Nuestra Historia </strong></h1>
                    <Row >
                        <Row xs={12} md={12} >
                            <p >La Quintana del Tordu es una vivienda centenaria estilo mariñana (construcción típica asturiana).</p>
                            <p>Consta de 5 construcciones, actualmente solo 2 reformadas, las cuales son 2 viviendas familiares, una cuadra, la “Casa La Guerrera” (utilizada como Llagar de Sidra) y un hórreo.</p>
                        </Row>
                    </Row>
                    <div>
                        <Chrono mode="VERTICAL_ALTERNATING" items={items} slideShow slideItemDuration={4000} scrollable={{ scrollbar: false }}>

                            <div>
                                <h3>Inicios</h3>
                                <p>
                                    <strong>La Quintana del Tordu </strong> tiene su origen en la familia Estrada, que deciden ubicar su vivienda familiar en unos terrenos en Oles. Originariamente la vivienda constaba de una planta y carecía de agua corriente (toda derivaba del “pozu”).
            </p>
                                <img src={chrono1} style={{ maxWidth: "100%", maxHeight: "100%" }} alt="test" />
                            </div>
                            <div style={{ margin: "1rem" }}>
                                <h3>Continuación</h3>
                                <p>
                                    Los años 20 y 30 son para el pueblo de Oles los “años dorados” con la llegada de capital por parte de “indianos”, jóvenes que emigraban a América en busca de una oportunidad empresarial.
            </p>

                                <p>
                                    Llamativo es el caso de Tomás Noval y Noval, uno de los indianos mas representativos de Oles que consiguió hasta la alcaldía de Villaviciosa y al que se debe la carretera denominada “recta del gobernado”.
            </p>

                                <p>
                                    En esta época, la quintana sufre una inyección de capital que le permite ampliar terrenos y construcciones por parte de un indiano de la familia que consigue una pequeña fortuna en Colombia.
            </p>
                            </div>
                            <div>
                                <h3>Continuación 2</h3>
                                <p>
                                    Luis Estrada, hijo de Pascual Estrada, construye con ayuda de su familia, a destacar Celso (cantero) su vivienda familiar a la izquierda de la cuadra, una vivienda básica que ni si quiera gozaba de lo que entonces eran excentricidades como el baño.
            </p>
            <img src={luis} style={{ maxWidth: "100%", maxHeight: "100%" }} alt="test"/>
                            </div>

                            <div>
                                <h3>Continuación 3</h3>
                                <p>
                                    Con la muerte de Pascual y su esposa, dejando 5 hermanos con un conflicto testamentario, la quintana queda en abandono siendo considerada prácticamente una “Res Nullius”. Solo el ganado de Luis Estrada y en ocasiones de José Manuel Estrada pueblan los terrenos de la quintana.
            </p>
                            </div>
                            <div>
                                <h3>La gran esperanza blanca</h3>
                                <p>
                                    Una década de pleitos judiciales dilucidan lo que los testamentos advertían, y Luis Estrada (respetando la voluntad del testador) es considerado por el TSJA como heredero de La Quintana.           
                           </p>
                           <p>
                           Durante la primera década del 2000, Luis Estrada y su hija Eloísa Estrada emprenden una remodelación y reforma de la vivienda familiar, con el fin de (respetando la estructura y todos los muebles posibles) conservar y acondicionar la vivienda familiar.
                           </p>
                            </div>
                            <div>
                                <h3>Actualidad</h3>
                                <p>
                                Tras el fallecimiento de Luis Estrada, su hija Eloísa Estrada se aventura a una nueva reforma de la vivienda construida en los años 80, lugar donde Eloísa pasó los primeros años de su vida.
            </p>
                            </div>
                        </Chrono>
                    </div>
                </div>
            </Container>
        </motion.div >
    )
}

export default Historia;