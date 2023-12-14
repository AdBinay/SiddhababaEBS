// import React, {useState , useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Col, Card, Image, Button } from 'react-bootstrap';
// import axios from 'axios'
import React from "react"
import Faculty from '../components/faculty'

function FacultyScreen() {
    // const [faculty, setfaculty] = useState([])
    // useEffect(() =>{
    //   async function fetchFaculty(){
    //     const { data } = await axios.get('/api/faculty/')
    //     setfaculty(data)
    //   }
    //   fetchFaculty()
    // },[])
  
  return (
    <Faculty/>
  )
}

export default FacultyScreen