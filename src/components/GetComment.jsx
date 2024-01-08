import React from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

class GetComment extends React.Component {
    state = {
        comments: [],
        loading: false,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.bookId !== this.props.bookId) {
            this.fetchData(this.props.bookId)
        }
    }


    async fetchData(bookId) {
        this.setState({loading: true})
        const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmI0M2UwZGQxZDAwMTgyZDE3NWIiLCJpYXQiOjE3MDQ3MjEyMjAsImV4cCI6MTcwNTkzMDgyMH0.s5rqSKWOIz6A5AuFwCS3c0KwCT7UVpkD84qzWWQHjKk'
        try {
            const response = await axios.get(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
                headers: {
                    "Authorization": `Bearer ${tokenAPI}`
                }
            });
            this.setState({ comments: response.data, loading: false});
        } catch (error) {
            console.error("Si è verificato un errore!", error);
        }
    }
    componentDidMount() {
        this.fetchData(this.props.bookId);
    }
    render() {
        const { comments, loading } = this.state;
        if (loading) {
            return <Spinner></Spinner>
        } 
        return (
            <div>
                {comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default GetComment;