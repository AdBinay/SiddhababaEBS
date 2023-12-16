import React from 'react';
import {MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function FindUs() {
  return (
    <section className='border text-center mb-4'>
      <div className='row'>
        <div className='col-lg-4'>
          <iframe
            title='location'
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3527.0669311913603!2d83.81599136536101!3d27.886923808253844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1702709474032!5m2!1sen!2snp"
            className='h-100 w-100'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='col-lg-8'>
          <form>
            <div className='row'>
                <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
                  <h4 className='text-uppercase fw-bold mb-4'>Our Goals</h4>
                  <p>
                    <a href='#!' className='text-reset'>
                      Mission
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Vision
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Objectives
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md='3' lg='3' xl='3' className='mx-auto mb-4'>
                  <h4 className='text-uppercase fw-bold mb-4'>More Links</h4>
                  <p>
                    <a href='#!' className='text-reset'>
                      Downloads
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Curriculams
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Testimonials
                    </a>
                  </p>
                  <p>
                    <a href='/faculty' className='text-reset'>
                      Faculty & Staffs
                    </a>
                  </p>
                </MDBCol>
              <div className='col-md-3'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                    <p>
                      <small>CHAPAKOT MUNICIPALITY-08,SYANGJA</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-phone fa-2x text-primary'></i>
                    <p>
                      <small>+9779845548297</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-envelope fa-2x text-primary'></i>
                    <p>
                      <small>contactsiddhababa@gmail.com</small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div> <br/>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Siddhababa school
        </a>
      </div>
    </section>
  );
}

