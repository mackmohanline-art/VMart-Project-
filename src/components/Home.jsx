import React from 'react';
import PublicMessageBoard from './PublicMessageBoard';

const Home = () => {
  return (
    <div>
      {/* Your existing home page content */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Our Site</h1>
        {/* Add the message board anywhere on your home page */}
        <PublicMessageBoard />
        {/* Your other home page content */}
      </div>
    </div>
  );
};

export default Home;
