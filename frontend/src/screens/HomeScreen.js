import React from 'react'
import BootstrapCarouselComponent from '../components/BootstrapCarouselComponent'
// import Testimonials from '../components/Testimonials'
import Messages from '../components/Messages'
function HomeScreen() {
  return (
    <div> 
        <BootstrapCarouselComponent />  <br/>
        {/* <Testimonials/> */}
        <Messages/>
    </div>
  )
}

export default HomeScreen