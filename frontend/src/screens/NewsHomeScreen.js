import React, {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios'
// import Notice from '../components/Notice';

function NewsHomeScreen() {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    async function fetchNotices() {
      const { data } = await axios.get("/api/notices/");
      setNotices(data);
    }
    fetchNotices();
  }, []);

  return (
    <div>
      <h1>Latest Notice</h1> <br />
      <Row>
        {notices.map((notice) => (
          <Col
            key={notice._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            style={{ margin: "auto", padding: "7px" }}
          >
            <Card style={{ margin: "auto", padding: "10px", width: "18rem" }}>
              <div style={{ textAlign: "center" }}>
                <Card.Img variant="top" src={notice.image} alt={notice.title} />
              </div>
              <div style={{ margin: "auto", padding: "8px" }}>
                <Card.Title>{notice.title}</Card.Title>
              </div>
              <Card.Text style={{ textAlign: "left" }}>
                {notice.description.length > 20 ? (
                  <span>
                    {`${notice.description.slice(0, 50)}... `}
                    <Link to={`/notices/${notice._id}`}>
                      <br />
                      <Button variant="info" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </span>
                ) : (
                  notice.description
                )}{" "}
                <br /> <hr />
              </Card.Text>
              <h6>Post on : {notice.createdAt}</h6>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default NewsHomeScreen;
