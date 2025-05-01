import React, { useEffect } from 'react';

const BasicEffect = () => {
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return <div>Hello from Basic Effect</div>;
};

export default BasicEffect;
