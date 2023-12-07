import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap' 
import React from 'react';
import { useParams } from 'react-router-dom';
import notices from '../notice';

function NewsScreen() {
  const { _id } = useParams();
  const notice = notices.find((n) => n._id === _id);

  if (!notice) {
    return <div>Notice not found</div>;
  }

  return (
    <div>
      <Link to='/notice' className='btn btn-success my-3'>GO Back</Link>
      <Row>
        <Col md={6}>
          <Image src={notice.image} alt={notice.title} fluid/>
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{notice.title}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>{notice.description}</h6>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default NewsScreen;
