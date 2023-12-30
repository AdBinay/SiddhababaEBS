// import React, { useState, useEffect } from 'react';
// import './OverHead.css';
// import { LinkContainer } from 'react-router-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import axios from 'axios';

// function TestHead() {
//   const [schoolInformation, setSchoolInformation] = useState([]);

//   useEffect(() => {
//     async function fetchSchoolInformation() {
//       try {
//         const { data } = await axios.get('/api/schoolinformation/');
//         setSchoolInformation(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchSchoolInformation();
//   }, []);

//   return (
//     <>
//       {schoolInformation.map((school, index) => (
//         <div key={index} className="row topbar pad-2" style={{ marginTop: '10px' }}>
//           <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex align-items-center">
//             <LinkContainer to="/" className="active nav-link">
//               <Nav.Link>
//                 <img
//                   className="mr-3 rounded-circle logo"
//                   src="/images/logo.png"
//                   alt="SEBSS Logo"
//                   width="225"
//                   height="225"
//                   style={{ margin: '5px' }}
//                 />
//               </Nav.Link>
//             </LinkContainer>
//           </div>
//           <div className="col-lg-8 col-md-6 col-sm-8 col-12 d-flex align-items-center">
//             <div className="ml-3">
//               <h1 className="OpenSans-ExtraBold text-uppercase" style={{ fontSize: '42px' }}>
//                 {school.school_name}
//               </h1>
//               <p style={{ fontSize: '24px' }}>
//                 <i>{school.school_motto}</i>
//               </p>
//               {/* <marquee className="marquee">
//                 <h2>{school.nepali_name}</h2>
//               </marquee> */}
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-flex flex-column align-items-center" >
//             <ul className="list-unstyled contact-info" style={{ justifyContent: 'flex-end' }}>
//               <li>
//                 <i className="fa-solid fa-phone"></i>
//                 <p>
//                   <small className="text-dark">{school.school_phone}</small>
//                 </p>
//               </li>
//               <li>
//                 <i className="fa-solid fa-envelope"></i>
//                 <p>
//                   <small className="text-dark">{school.school_email}</small>
//                 </p>
//               </li>
//               <li >
//                 <i className="fa-solid fa-location-dot"></i>
//                 <p>
//                   <small className="text-dark">{school.school_address}</small>
//                 </p>
//               </li>
//               <li >
//                 <i className="fa-brands fa-facebook"></i>
//                 <p>
//                   <small className="text-dark">facebook.com/SiddhababaSchool</small>
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default TestHead;


import React, { useState, useEffect } from 'react';
import './OverHead.css';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

function TestHead() {
  const [schoolInformation, setSchoolInformation] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    async function fetchSchoolInformation() {
      try {
        const { data } = await axios.get('/api/schoolinformation/');
        setSchoolInformation(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    fetchSchoolInformation();

    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateTimeStyle = { fontSize: '20px' }; // Adjust the font size here

  return (
    <>
      {schoolInformation.map((school, index) => (
        <div key={index} className="row topbar pad-2" style={{ marginTop: '10px' }}>
          <div className="col-lg-2 col-md-3 col-sm-4 col-12 d-flex align-items-center">
            <LinkContainer to="/" className="active nav-link">
              <Nav.Link>
                <img
                  className="mr-3 rounded-circle logo"
                  src="/images/logo.png"
                  alt="SEBSS Logo"
                  width="225"
                  height="225"
                  style={{ margin: '5px' }}
                />
              </Nav.Link>
            </LinkContainer>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-8 col-12 d-flex align-items-center">
            <div className="ml-3">
              <h1 className="OpenSans-ExtraBold text-uppercase" style={{ fontSize: '42px' }}>
                {school.school_name}
              </h1>
              <p style={{ fontSize: '24px' }}>
                <i>{school.nepali_name}</i>
              </p>
              {/* Date and Time */}
              <p>
                <small className="text-dark" style={dateTimeStyle}>
                  {currentDateTime.toLocaleDateString(undefined, options)} | {currentDateTime.toLocaleTimeString()}
                </small>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-flex flex-column align-items-center">
            <ul className="list-unstyled contact-info" style={{ justifyContent: 'flex-end' }}>
              <li>
                <i className="fa-solid fa-phone"></i>
                <p>
                  <small className="text-dark">{school.school_phone}</small>
                </p>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <p>
                  <small className="text-dark">{school.school_email}</small>
                </p>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  <small className="text-dark">{school.school_address}</small>
                </p>
              </li>
              <li>
                <i className="fa-brands fa-facebook"></i>
                <p>
                  <small className="text-dark">facebook.com/SiddhababaSchool</small>
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

