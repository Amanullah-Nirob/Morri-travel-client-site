   
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const {img,title,dis,_id}=props.card
    return (
        <Col>
        <Card className='homeserviess'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className='stitle'>{title}</Card.Title>
            <Card.Text className='sdis'>{dis}</Card.Text>
            <Link to={`/HomeServices/${_id}`}>book now</Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default HomeService;