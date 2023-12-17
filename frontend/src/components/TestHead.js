import React from 'react';
import './OverHead.css';


function TestHead() {
  return (
    <div className="container-fluid TestHead ">
      <div className="row topbar pad-2 d-flex justify-content-between">
        <div className="col-lg-7">
          <div className=" ml-3 d-flex justify-content-around">
            <a href="/">
              <img className="mr-3" src="../images/logo.png" alt="SEBSS Logo" width="250" height="250" />
            </a>
            <div className='mt-4'>
            <h1 className=" OpenSans-ExtraBold text-uppercase">
              Shree Siddhababa Secondary English Boarding School
            </h1 >
            <p className=" OpenSans-ExtraBold text-uppercase">"Education For Excellence And Discipline"</p>
            <marquee className='marque'>
              <h2>श्री सिद्धबाबा इंगलिस बोर्डिगं स्कुल,चापाकोट नगरपालिका-०२ स्याङ्गजा गण्डकी नेपाल |</h2>
            </marquee>
            </div>
          </div>
          
        </div>
            <div className='col-lg-3 mt-4'>
                <ul className='list-unstyled '>
                  <li>
                    <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                    <p>
                      <small className='text-dark'>CHAPAKOT MUNICIPALITY-08,SYANGJA</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-phone fa-2x text-primary'></i>
                    <p>
                      <small className='text-dark'>+9779845548297</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-envelope fa-2x text-primary'></i>
                    <p>
                      <small className='text-dark'>contactsiddhababa@gmail.com</small>
                    </p>
                  </li>
                </ul>
            </div>
      </div>
    </div>
    
  );
}

export default TestHead;
