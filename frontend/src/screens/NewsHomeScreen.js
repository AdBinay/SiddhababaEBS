import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Image } from 'react-bootstrap';
import axios from 'axios'
// import Notice from '../components/Notice';

function NewsHomeScreen() {
  const [notices, setNotices] = useState([])
  useEffect(() =>{
    async function fetchNotices(){
      const { data } = await axios.get('/api/notices/')
      setNotices(data)
    }
    fetchNotices()
  },[])

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
                    <Link to={`/notice/${notice._id}`} ><b> Read more..</b></Link>
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



