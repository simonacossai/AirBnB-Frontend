import React, { Component } from 'react'
import { Card, Button, Col, Badge } from 'react-bootstrap'
import { GiColiseum } from 'react-icons/gi'
import './SingleCard.css'

export default class SingleCard extends Component {
    render() {
        return (
            <Col>
                <Card style={{ width: '18rem' }} className="place-card">
                    <Card.Img variant="top" src="https://www.arredamento.it/452/img/le-case-bellissime.asp_Oit_114805.jpg" className="card-image"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
