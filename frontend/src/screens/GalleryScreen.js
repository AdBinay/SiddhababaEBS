import React, {useState , useEffect} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios'


function GalleryScreen() {
    const [gallery, setGallery] = useState([]);
    useEffect(() =>{
      async function fetchGallery(){
        const { data } = await axios.get("/api/gallery/");
        setGallery(data);
      }
      fetchGallery();
    },[])
  
  return (
    
    <div>
      <h1>Gallery</h1> <br />
      <Row>
        {gallery.map((gallery) => (
          <Col
            key={gallery.name}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            style={{ margin: "auto", padding: "7px" }}
          >
            <Card style={{ margin: "auto", padding: "10px", width: "18rem" }}>
              <div style={{ textAlign: "center" }}>
                <Card.Img variant="top" src={gallery.image} alt={gallery.name} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default GalleryScreen;