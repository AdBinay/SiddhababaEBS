import React, { useState, useEffect } from 'react';
import './OverHead.css';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

function TestHead() {
  const [schoolInformation, setSchoolInformation] = useState([]);

  useEffect(() => {
    async function fetchSchoolInformation() {
      try {
        const { data } = await axios.get('/api/schoolinformation/');
        setSchoolInformation(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchSchoolInformation();
  }, []);

  return (
    <>
      {schoolInformation.map((school, index) => (
        <div key={index} className="row topbar pad-2">
          <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex align-items-center">
            <LinkContainer to="/" className="active nav-link">
              <Nav.Link>
                <img
                  className="mr-3 rounded-circle logo"
                  src="/images/logo.png"
                  alt="SEBSS Logo"
                  width="225"
                  height="225"
                />
              </Nav.Link>
            </LinkContainer>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-8 col-12 d-flex align-items-center">
            <div className="ml-3">
              <h1 className="OpenSans-ExtraBold text-uppercase">
                {school.school_name}
              </h1>
              <p className="OpenSans-ExtraBold text-uppercase">
                {school.school_motto}
              </p>
              <marquee className="marquee">
                <h2>{school.nepali_name}</h2>
              </marquee>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-flex flex-column align-items-center">
            <ul className="list-unstyled contact-info">
              <li>
                <i className="fas fa-phone fa-lg text-primary"></i>
                <p>
                  <small className="text-dark">{school.school_phone}</small>
                </p>
              </li>
              <li>
                <i className="fas fa-envelope fa-lg text-primary"></i>
                <p>
                  <small className="text-dark">{school.school_email}</small>
                </p>
              </li>
              <li style={{ marginTop: '10px' }}>
                <i className="fas fa-map-marker-alt fa-lg text-primary"></i>
                <p>
                  <small className="text-dark">{school.school_address}</small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default TestHead;
