import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const BootstrapCarouselComponent = () => {
  const [profilepictures, setProfilepictures] = useState([]);

  useEffect(() => {
    const fetchProfilepictures = async () => {
        const response = await axios.get('/api/profilepicture/'); // Replace with your API endpoint
        setProfilepictures(response.data);
    };
    fetchProfilepictures();
  }, []);

  return (
    <div>
      {profilepictures.map((profilepicture) => (
        < div key={profilepicture.Caption}>
           <div className='container-fluid'>
            <div className="row">
              <div className="col-12">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={profilepicture.first_image}
                      alt="First slide"
                    />
                    {/* <Carousel.Caption>
                      <h3>{profilepicture.image_heading}</h3>
                      <p>{profilepicture.image_caption}</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={profilepicture.second_image}
                      alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                      <h3>{profilepicture.image_heading}</h3>
                      <p>{profilepicture.image_caption}</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={profilepicture.third_image}
                      alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                      <h3>{profilepicture.image_heading}</h3>
                      <p>{profilepicture.image_caption}</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
     
        </div>
      ))}
    </div>
  );
};

export default BootstrapCarouselComponent;
