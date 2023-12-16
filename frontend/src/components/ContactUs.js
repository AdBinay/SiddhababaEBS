import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';

export default function FindUs() {
  return (
    <section className='border text-center mb-4'>
      <h3 className='mb-5'>Contact us</h3>
      <h1
				style={{
					color: "Black",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				Siddhababa English Boarding School <br/> 
        <h5 
        style={{
					color: "Black",
					textAlign: "center",
					marginTop: "10px",
				}}>Chapakot Municipality-03, Shyangja</h5> <hr/>
			</h1>
      <div className='row'>
        <div className='col-lg-5'>
          <iframe
            title='location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
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
                  <MDBCol >
                    <MDBInput id='form3FirstName' placeholder='First name' />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput  id='form3Email' placeholder='Email Address' />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  type='text'
                  id='form3Subject'
                  v-model='form3Subject'
                  wrapperClass='mb-4'
                  placeholder='Subject'
                />
                <MDBTextArea id='form3Textarea' wrapperClass='mb-5' placeholder='Message' />
                <MDBBtn color='info' className='mb-4'>
                  {' '}
                  Send{' '}
                </MDBBtn>
              </div>
              <div className='col-md-3'>
                <ul className='list-unstyled'>
                  <li>
                    <i className='fas fa-map-marker-alt fa-2x text-primary'></i>
                    <p>
                      <small>New York, NY 10012, USA</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-phone fa-2x text-primary'></i>
                    <p>
                      <small>+ 01 234 567 89</small>
                    </p>
                  </li>
                  <li>
                    <i className='fas fa-envelope fa-2x text-primary'></i>
                    <p>
                      <small>contact@gmail.com</small>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

