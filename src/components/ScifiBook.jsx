import React, { Component } from 'react';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayBooks.css';
import SingleBook from './SingleBook';
import BookComments from './BookComment';

class ScifiBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCount: 10,
            activeBookId: null,
        };
    }

    handleChange = (e) => {
        this.setState({ displayCount: e.target.value });
    }

    setActiveBookId = (bookId) => {
        this.setState({ activeBookId: bookId });
    }

    render() {
        const {displayCount, activeBookId} = this.state;
        const displayedBooks = scifi.slice(0, displayCount)
        const {searchQuery} = this.props;
        const filteredScifi = searchQuery ? displayedBooks.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())) : displayedBooks;

        return (
            <main className='d-flex'>
                <Container>
                    <h1 as={Link} to='/scifi'>Scifi</h1>
    
                    <Form>
                        <Form.Group>
                            <Form.Label>Numero di libri da visualizzare</Form.Label>
                            <Form.Control className='displayBook' as="select" value={displayCount} onChange={this.handleChange}>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option> 
                            </Form.Control>
                        </Form.Group>
                    </Form>
    
                    <Row>
                        {filteredScifi.map((libro, index) => (
                            <Col key={index} >
                                <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <BookComments bookId={activeBookId} />
            </main>
        );
    }
}

export default ScifiBook;