import React from 'react';
import GetComment from './GetComment';
import PostComment from './PostComment';
import { Card, Container } from 'react-bootstrap';

class BookComments extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.bookId !== this.props.bookId) {
            // Codice da eseguire quando l'ID del libro cambia
            // Questo potrebbe includere il caricamento di nuovi commenti o altre azioni necessarie
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