import React from 'react';
import { motion } from 'framer-motion'
import { Container, Form, Card, Button } from 'react-bootstrap'
import './Reservas.css'
function Reservas() {

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
            className="molde"
        >
            <Container className="Container">
                <h1> Reservas </h1>
                <br></br>
                <h4>Si Desea Efectuar una reserva por favor rellene este formulario:</h4> 
                <br>
                </br>
                    <Form className="customform">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Dirección de Correo</Form.Label>
                            <Form.Control type="email" placeholder="Introduzca su Email" required />
                            <Form.Text className="text-muted">
                                Su correo nunca será utilizado para otros fines que no sean comerciales</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Contenido</Form.Label>
                            <Form.Control as="textarea" rows={11} />
                        </Form.Group>
                        <Button variant="primary" type="submit"> Submit</Button>
                    </Form>
            </Container>
        </motion.div>
    )
}

export default Reservas;