
// import React from 'react';

// import { Carousel } from 'react-bootstrap';


// class BootstrapCarouselComponent extends React.Component() {
    
  
//     render() {
//         return (
//             <div>
//                 <div className='container-fluid' >
//                     <div className="row">
//                         <div className="col-12">
//                             <Carousel>
//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src="https://source.unsplash.com/500×300/?river"
//                                         alt="First slide"
//                                     />
//                                     <Carousel.Caption>
//                                         <h3>First slide label</h3>
//                                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                                     </Carousel.Caption>
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src="https://source.unsplash.com/500×300/?city"
//                                         alt="Second slide"
//                                     />

//                                     <Carousel.Caption>
//                                         <h3>Second slide label</h3>
//                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                                     </Carousel.Caption>
//                                 </Carousel.Item>

//                                 <Carousel.Item>
//                                     <img
//                                         className="d-block w-100"
//                                         src="https://source.unsplash.com/500×300/?random"                                       
//                                         alt="Third slide"
//                                     />
//                                     <Carousel.Caption>
//                                         <h3>Third slide label</h3>
//                                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                                     </Carousel.Caption>
//                                 </Carousel.Item>

//                             </Carousel>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     };
// }

// export default BootstrapCarouselComponent;




import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const BootstrapCarouselComponent = () => {
  const [profilepicture, setProfileimage] = useState({
    first_image: '',
    second_image: '',
    third_image: ''
  });

  useEffect(() => {
    const fetchProfileimage = async () => {
        const response = await axios.get('/api/profilepicture/'); // Replace with your API endpoint
        setProfileimage(response.data);
    };
    fetchProfileimage();
  }, []);

  return (
    <div>
        
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12">
            <Carousel>
                {/* {profilepicture.map((profilepicture))} */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={profilepicture.first_image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={profilepicture.second_image}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={profilepicture.third_image}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootstrapCarouselComponent;
