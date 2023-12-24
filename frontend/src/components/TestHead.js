import React from 'react';
import './OverHead.css';
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';
import {useState , useEffect} from 'react';
import axios from 'axios'

function TestHead() {
  const [schoolinformation, setSchoolinformation] = useState([]);
    useEffect(() =>{
      async function fetchSchoolinformation(){
        const { data } = await axios.get("/api/schoolinformation/");
        setSchoolinformation(data);
      }
      fetchSchoolinformation();
    },[])
    return (
    <div className="container-fluid TestHead ">
      {schoolinformation.map((schoolinformation) => (
        <div key={schoolinformation.name}>
          <div className="row topbar pad-2 d-flex justify-content-between">
            <div className="col-lg-7">
              <div className=" ml-3 d-flex justify-content-around">
              <LinkContainer to="/">
                <Nav.Link >
                  <img className="mr-3 rounded-circle" src={schoolinformation.school_logo} alt="SEBSS Logo" width="250" height="250" />
                </Nav.Link>
              </LinkContainer>
                <div className='mt-4'>
                <h1 className=" OpenSans-ExtraBold text-uppercase">
                  {schoolinformation.school_name}
                </h1 >
                <p className=" OpenSans-ExtraBold text-uppercase">{schoolinformation.school_motto}</p>
                <marquee className='marque'>
                  <h2>{schoolinformation.nepali_name}</h2>
                </marquee>
                </div>
              </div>
            </div>
                <div className='col-lg-3 mt-4'>
                    <ul className='list-unstyled '>
                      <li>
                        <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                        <p>
                          <small className='text-dark'>{schoolinformation.school_address}</small>
                        </p>
                      </li>
                      <li>
                        <i className='fas fa-phone fa-2x text-primary'></i>
                        <p>
                          <small className='text-dark'>{schoolinformation.school_phone}</small>
                        </p>
                      </li>
                      <li>
                        <i className='fas fa-envelope fa-2x text-primary'></i>
                        <p>
                          <small className='text-dark'>{schoolinformation.school_email}</small>
                        </p>
                      </li>
                    </ul>
                </div>
          </div> 
        </div>
        ))}
    </div>
    
  );
}

export default TestHead;



