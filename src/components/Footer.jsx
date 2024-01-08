import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import './logo.css';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container className="d-flex justify-content-center align-items-center">
                    <p>2023&copy; Durotar Library - For The Horde</p>
                    <img src="/assets/imgs/forTheHorde.webp" className="img-fluid" alt="Durotar logo" />
                </Container>
            </footer>
        );
    }
}

export default Footer;
