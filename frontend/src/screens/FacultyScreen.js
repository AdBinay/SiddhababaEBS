import React, {useState , useEffect} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios'


function FacultyScreen() {
    const [faculty, setFaculty] = useState([]);
    useEffect(() =>{
      async function fetchFaculty(){
        const { data } = await axios.get("/api/faculty/");
        setFaculty(data);
      }
      fetchFaculty();
    },[])
  
  return (
    
    <div>
      <h1>Teaching Faculty</h1> <br />
      <Row>
        {faculty.map((faculty) => (
          <Col
            key={faculty.id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            style={{ margin: "auto", padding: "7px" }}
          >
            <Card style={{ margin: "auto", padding: "10px", width: "18rem" }}>
              <div style={{ textAlign: "center" }}>
                <Card.Img variant="top" src={faculty.pp_image} alt={faculty.name} />
              </div>
              <div style={{ margin: "auto", padding: "8px" }}>
                <Card.Title>{faculty.name}</Card.Title>
              </div>
              <Card.Text style={{ textAlign: "left" }}>
                {faculty.description}{" "}
                <br />
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FacultyScreen;