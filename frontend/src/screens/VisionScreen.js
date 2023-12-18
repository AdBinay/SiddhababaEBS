import React, {useState , useEffect} from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios'


function VissionScreen() {
    const [vission, setVission] = useState([]);
    useEffect(() =>{
      async function fetchVission(){
        const { data } = await axios.get("/api/vission/");
        setVission(data);
      }
      fetchVission();
    },[])
  
  return (
    
    <div>
      <h1>Our Vision</h1> <br />
      <Row>
        {vission.map((vission) => (
            <p>{vission.description}</p>
        ))}
      </Row>
    </div>
  )
}

export default VissionScreen;