import React from 'react';
import { Modal, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class SingleBook extends React.Component {

   /*  state = {
        showModal: false
    }; */

   /*  toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };
 */
    render() {
        const { book, onSelectBook } = this.props;
        /* const { showModal } = this.state; */

        return (
            <>
                <Card style={{ width: '100%' }} onClick={() => onSelectBook(book.asin)}>
                    <Card.Img variant="top" src={book.img} className="img-fluid" />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{book.category} - {book.price} €</ListGroup.Item>
                    </ListGroup>
                </Card>

                {/* <Modal show={showModal} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{book.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex'>
                        <img src={book.img} alt={book.title} className="img-fluid" />
                        <div className='d-flex flex-column'>
                            <p>User rating:</p>
                            <GetComment bookId={book.asin} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" href="#">
                            Shop now
                        </Button>
                    </Modal.Footer>
                    <PostComment asin={book.asin} />
                </Modal> */}
            </>
        );
    }
}

export default SingleBook;