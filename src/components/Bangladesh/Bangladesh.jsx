import React from 'react';
import {Container, Row } from 'react-bootstrap';
import Rajshahi from './Rajshahi';
import Khulna from './Khulna';
import Dhaka from './Dhaka';

const Bangladesh = () => {
    return (
       <Container>
           <Row>
               <Khulna></Khulna>
           </Row>
       </Container>
    );
}

export default Bangladesh;
