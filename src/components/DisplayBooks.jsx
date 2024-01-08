import React from "react";
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import './DisplayBooks.css';
import SingleBook from "./SingleBook";
import BookComments from "./BookComment";

class DisplayBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBookId: null,
        }
    };

    setActiveBookId = (bookId) => {
        this.setState({ activeBookId: bookId });
    }

    render() {
        const { searchQuery } = this.props;
        const { activeBookId } = this.state;

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
            <main className="d-flex">
                <Container>
                    <h1>Fantasy</h1>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                {filteredFantasy.slice(0, 5).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId}  />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredFantasy.slice(5, 10).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredFantasy.slice(10, 15).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredFantasy.slice(15, 20).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredFantasy.slice(20, 25).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                    <h1>History</h1>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                {filteredHistory.slice(0, 5).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHistory.slice(5, 10).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {history.slice(10, 15).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHistory.slice(15, 20).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHistory.slice(20, 25).map((libro, index) => (
                                    <Col key={index}>
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                    <h1>Horror</h1>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                {filteredHorror.slice(0, 5).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHorror.slice(5, 10).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHorror.slice(10, 15).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHorror.slice(15, 20).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredHorror.slice(20, 25).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                    <h1>Romance</h1>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                {filteredRomance.slice(0, 5).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredRomance.slice(5, 10).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredRomance.slice(10, 15).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredRomance.slice(15, 20).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredRomance.slice(20, 25).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                    <h1>Scifi</h1>
                    <Carousel>
                        <Carousel.Item>
                            <Row>
                                {filteredScifi.slice(0, 5).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredScifi.slice(5, 10).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredScifi.slice(10, 15).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredScifi.slice(15, 20).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                {filteredScifi.slice(20, 25).map((libro, index) => (
                                    <Col key={index} >
                                        <SingleBook book={libro}  onSelectBook={this.setActiveBookId} />
                                    </Col>
                                ))}
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
                <BookComments bookId={activeBookId} />
            </main>
        );
    }
}

export default DisplayBooks; 