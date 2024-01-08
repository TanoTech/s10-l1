import React from 'react';
import axios from 'axios';

class PostComment extends React.Component {
    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
        },
    };

    componentDidUpdate(prevProps) {
        if (prevProps.asin !== this.props.asin) {
            this.setState(prevState => ({
                comment: {
                    ...prevState.comment,
                    elementId: this.props.asin
                }
            }));
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NWE4NWI1MjViYjAwMThlZDA4OTIiLCJpYXQiOjE3MDMxNzI3NDEsImV4cCI6MTcwNDM4MjM0MX0.MqyGj9rVA73xnyHt6rWKry33R2TRIinH6ycjbB6NUUE'
    
        try {
            const response = await axios.post(`https://striveschool-api.herokuapp.com/api/book/${this.state.comment.elementId}/comments/`
            , {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${tokenAPI}`
                }
            });
    
            this.setState({
                comment: { comment: '', rate: 1, elementId: this.props.asin },
                feedback: 'Commento inviato con successo!'
            });
        } catch (error) {
            this.setState({
                feedback: 'Errore nell\'invio del commento: ' + error.message
            });
        }
    };
    
    handleInputChange = (e) => {
        this.setState(prevState => ({
            comment: {
                ...prevState.comment,
                comment: e.target.value
            }
        }));
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'contents' }}>
                <textarea
                    value={this.state.comment.comment}
                    onChange={this.handleInputChange}
                    placeholder="Write your comment"
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className='justify-content-center'>Invia Commento</button>
                {this.state.feedback && <div>{this.state.feedback}</div>}
            </form>
        );
    }
}

export default PostComment;