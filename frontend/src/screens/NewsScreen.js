import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NewsScreen() {
  const { _id } = useParams(); // Using useParams hook to get the id from URL

  const [notice, setNotice] = useState({});

  useEffect(() => {
    async function fetchNotice() {
      try {
        const { data } = await axios.get(`/api/notices/${_id}`);
        setNotice(data);
      } catch (error) {
        // Handle error (e.g., log or show error message)
        console.error('Error fetching notice:', error);
      }
    }
    fetchNotice();
  }, [_id]); // Adding id to dependency array to fetch notice when id changes

  return (
    <div>
      <Link to='/notices' className='btn btn-success my-3'>
        GO Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={notice.image} alt={notice.title} fluid />
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
