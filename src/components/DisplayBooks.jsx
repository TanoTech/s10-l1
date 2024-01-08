import React from "react";
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Card, ListGroup, Carousel } from "react-bootstrap";
import './DisplayBooks.css';
import SingleBook from "./SingleBook";

class DisplayBooks extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { searchQuery } = this.props;

        const filteredFantasy = searchQuery ? fantasy.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : fantasy;

        const filteredHorror = searchQuery ? horror.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : horror;

        const filteredHistory = searchQuery ? history.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : history;

        const filteredScifi = searchQuery ? scifi.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : scifi;
        const filteredRomance = searchQuery ? romance.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : romance;

        return (
            <Container>
                <h1>Fantasy</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(0, 6).map((libro, index) => (
                                <Col key={index} lg={2} md={3} xs={7} sm={5}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>History</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredHistory.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHistory.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {history.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHistory.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHistory.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>Horror</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredHorror.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHorror.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHorror.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHorror.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHorror.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>Romance</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredRomance.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredRomance.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredRomance.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredRomance.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredRomance.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>Scifi</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredScifi.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredScifi.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredScifi.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredScifi.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredScifi.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <SingleBook book={libro} />
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}


export default DisplayBooks; 