import React, { Component } from 'react';
import romance from '../data/romance.json';
import { Container, Row, Col, Card, ListGroup, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayBooks.css';

class RomanceBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCount: 20
        };
    }

    handleChange = (e) => {
        this.setState({ displayCount: e.target.value });
    }

   
    render() {
        const {displayCount} = this.state;
        const displayedBooks = romance.slice(0, displayCount)
        const {searchQuery} = this.props;
        const filteredRomance = searchQuery ? displayedBooks.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : displayedBooks;
        return (
            <Container fluid>
                <h1 as={Link} to='/romance'>Romance</h1>

                <Form>
                    <Form.Group>
                        <Form.Label>Numero di libri da visualizzare</Form.Label>
                        <Form.Control as="select" value={displayCount} onChange={this.handleChange}>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>   
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Row>
                    {filteredRomance.map((libro, index) => (
                        <Col key={index} lg={2} md={3} xs={7} sm={5}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={libro.img} className="img-fluid" />
                                <Card.Body>
                                    <Card.Title>{libro.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{libro.category} - {libro.price} €</ListGroup.Item>
                                    <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default RomanceBook;
