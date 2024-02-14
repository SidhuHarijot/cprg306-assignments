import React from 'react';
import NewItem from './new-item';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center pt-8">
      <h1 className="text-3xl font-bold mb-4">Add New Item</h1>
      <NewItem />
    </div>
  );
};

export default Page;
