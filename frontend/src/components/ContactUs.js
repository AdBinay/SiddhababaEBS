import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

export default function FindUs() {
  return (
    <section className='border text-center mb-4'>
      <div className='row'>
        <div className='col-lg-5'>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56415.41129096034!2d83.77491363826401!3d27.903102423849127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995ce999a67f765%3A0xd18a5af880884508!2sChapakot!5e0!3m2!1sen!2snp!4v1702784463302!5m2!1sen!2snp" 
            className='h-100 w-100'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
        </div>
        <div className='col-lg-7'>
          <form>
            <div className='row'>
              <div className='col-md-9'>
                <MDBRow className='mb-4'>
                <h5>Complaint & Suggession Box</h5>
                  <MDBCol>
                    <MDBInput id='form3FirstName' placeholder='First name' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput id='form3Email' placeholder='Email Address' />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  type='text'
                  id='form3Subject'
                  v-model='form3Subject'
                  wrapperClass='mb-4'
                  placeholder='Subject'
                />
                <MDBTextArea id='form3Textarea' wrapperClass='mb-4' placeholder='Message' />
                <MDBBtn color='danger' className='mb-4'>
                  {' '}
                  Send{' '}
                </MDBBtn>
              </div>
              <div className='col-md-3'>
              <h5>OTHER LINKS</h5> <br/>
                <ul className='list-unstyled'>
                  <li>
                    {/* <i className='fas fa-map-marker-alt fa-2x text-primary'></i> */}
                    <p>
                      Our Mission
                    </p>
                  </li>
                  <li>
                    {/* <i className='fas fa-phone fa-2x text-primary'></i> */}
                    <p>
                      Our Vision
                    </p>
                  </li>
                  <li>
                    {/* <i className='fas fa-envelope fa-2x text-primary'></i> */}
                    <p>
                      Objectives
                    </p>
                  </li>
                  <li>
                    {/* <i className='fas fa-envelope fa-2x text-primary'></i> */}
                    <p>
                      Gallery
                    </p>
                  </li>
                  <li>
                    {/* <i className='fas fa-envelope fa-2x text-primary'></i> */}
                    <p>
                      Faculty and Staffs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div> <br/>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.00)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://siddhababaschool.com/'>
          siddhababa_school
        </a>
      </div>
    </section>
  );
}
