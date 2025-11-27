import React from 'react';
import logo from '../assets/logo.png';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img src={logo} alt="Logo" className="w-32 h-32 animate-pulse" />
    </div>
  );
};

export default Loading;
