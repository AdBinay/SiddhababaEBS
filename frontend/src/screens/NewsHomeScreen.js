
import React from 'react';
import { Link } from 'react-router-dom';
import notices from '../notice';
import { Row, Col, Card, Image } from 'react-bootstrap';
// import Notice from '../components/Notice';

function NewsHomeScreen() {
  return (
    <div>
      <h1>Latest Notice</h1> <br/>
      <Row>
        {notices.map((notice) => (
          <Col key={notice._id} sm={12} md={6} lg={4} xl={3} style={{  margin:'auto', padding:'10px' }}>
            <Card style={{  margin:'auto', padding:'10px' }}>
              {/* <Notice notice={notice} /> */}
              <div style={{  margin:'auto', padding:'10px' }}>
                <h4 style={{ textAlign: 'center' }}>{notice.title}</h4> 
              </div> <hr/>
              <div style={{ textAlign: 'center' }}>
                <Image src={notice.image} alt={notice.title} fluid style={{ width: '200px', height: '200px' }} />
              </div> <hr/>
              <p style={{ textAlign: 'center' }}>
                {notice.description.length > 20 ? (
                  <span>
                    {`${notice.description.slice(0, 50)}... `}
                    <Link to={`/notice/${notice._id}`} ><br/> See More..</Link>
                  </span>
                ) : (
                  notice.description
                )} <br/>
                post on : {notice.date_published}
              </p>
              <button type="button" class="btn btn-info">Update Post</button>
              <button type="button" class="btn btn-danger">Delete Post</button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default NewsHomeScreen;



