import React from 'react';
import GetComment from './GetComment';
import PostComment from './PostComment';
import { Container } from 'react-bootstrap';

class BookComments extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.bookId !== this.props.bookId) {
            console.log("ID del libro aggiornato:", this.props.bookId);
        }
    }

    render() {
        const { bookId } = this.props;
        return (
            <aside>
                <Container>
                    <div><h1>Comments</h1></div>
                    <div>
                        <GetComment bookId={bookId} />
                        <PostComment asin={bookId} />
                    </div>
                </Container>
            </aside>
        );
    }
}

export default BookComments;