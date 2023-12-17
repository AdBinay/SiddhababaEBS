import React from 'react';
import Particles from 'react-tsparticles';
import particleConfig from './config/particles-config'; // Ensure this import is correct

const ParticlesBackground = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Particles
        id="tsparticles"
        options={particleConfig}
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ParticlesBackground; // Make sure you export the component here
