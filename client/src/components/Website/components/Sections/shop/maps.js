import React from 'react';
import { Container } from '@material-ui/core';

export default function Map(props) {
    return (
        <Container>
            <iframe
                width="400"
                height="400"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB387HYMPGb934bjW6nWNDt7jT6QhUmBTw&q=Space+Needle,Seattle+WA"
                >
            </iframe>
        </Container>
    )
}