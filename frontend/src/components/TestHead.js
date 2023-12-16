import React from 'react';
import './OverHead.css';

function TestHead() {
  return (
    <div className="container-fluid TestHead ">
      <div className="row topbar pad-2 d-flex justify-content-between">
        <div className="col-lg-7">
          <div className=" ml-3 d-flex justify-content-around">
            <a href="/">
              <img className="mr-3" src="../images/logo.png" alt="SEBSS Logo" width="200" height="200" />
            </a>
            <div className='mt-4'>
            <h1 className="h4 OpenSans-ExtraBold text-uppercase">
              Shree Siddhababa English Boarding School
            </h1>
            <p>"Education For Excellence And Discipline"</p>
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
