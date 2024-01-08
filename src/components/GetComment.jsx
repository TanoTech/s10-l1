import React from "react";
import axios from "axios";


class GetComment extends React.Component {
    state = {
        comments: []
    };

    async fetchData(bookId) {
        const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NWE4NWI1MjViYjAwMThlZDA4OTIiLCJpYXQiOjE3MDMxNzI3NDEsImV4cCI6MTcwNDM4MjM0MX0.MqyGj9rVA73xnyHt6rWKry33R2TRIinH6ycjbB6NUUE'
        try {
            const response = await axios.get(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
                headers: {
                    "Authorization": `Bearer ${tokenAPI}`
                }
            });
            this.setState({ comments: response.data });
        } catch (error) {
            console.error("Si è verificato un errore!", error);
        }
    }

    componentDidMount() {
        this.fetchData(this.props.bookId);
    }

    render() {
        return (
            <div className="">
                {this.state.comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default GetComment;