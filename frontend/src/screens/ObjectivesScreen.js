import React, {useState , useEffect} from 'react';
import { Row} from 'react-bootstrap';
import axios from 'axios'


function ObjectivesScreen() {
    const [objectives, setObjectives] = useState([]);
    useEffect(() =>{
      async function fetchObjectives(){
        const { data } = await axios.get("/api/objectives/");
        setObjectives(data);
      }
      fetchObjectives();
    },[])
  
  return (
    
    <div>
      <h1>Our Objectives</h1> <br />
      <Row>
        {objectives.map((vission) => (
            <p>{objectives.description}</p>
        ))}
      </Row>
    </div>
  )
}

export default ObjectivesScreen;