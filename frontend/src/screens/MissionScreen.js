import React, {useState , useEffect} from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios'


function MissionScreen() {
    const [mission, setMission] = useState([]);
    useEffect(() =>{
      async function fetchMission(){
        const { data } = await axios.get("/api/mission/");
        setMission(data);
      }
      fetchMission();
    },[])
  
  return (
    
    <div>
      <h1>Our Mission</h1> <br />
      <Row>
        {mission.map((mission) => (
            <p>{mission.description}</p>
        ))}
      </Row>
    </div>
  )
}

export default MissionScreen;