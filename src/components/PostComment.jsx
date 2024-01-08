import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './DisplayBooks.css'

class PostComment extends React.Component {
    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
        },
    }


    componentDidUpdate(prevProps) {
        if (this.props.asin !== prevProps.asin) {
            this.setState({
                comment: {
                    ...this.state.comment,
                    elementId: this.props.asin,
                },
            });
        }
    }


    sendComment = async (e) => {
        const tokenAPI = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmI0M2UwZGQxZDAwMTgyZDE3NWIiLCJpYXQiOjE3MDQ3MjEyMjAsImV4cCI6MTcwNTkzMDgyMH0.s5rqSKWOIz6A5AuFwCS3c0KwCT7UVpkD84qzWWQHjKk'
        e.preventDefault()
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comment),
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${tokenAPI} `
                    },
                }
            )
            if (response.ok) {
                this.setState({
                    comment: {
                        comment: '',
                        rate: 1,
                        elementId: this.props.asin,
                    },
                })
                alert('Comment succefully submitted')
            } else {
                console.log('error')
            }
        } catch (error) {
            console.log('error')
        }
    }
    
    render() {
        return (
            <div className="my-3">
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.comment.rate}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        rate: e.target.value,
                                    },
                                })
                            }
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={this.state.comment.comment}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        comment: e.target.value,
                                    },
                                })
                            }
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default PostComment;