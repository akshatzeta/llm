import React from 'react';

const OutputNode = ({ output }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">OUTPUT</h3>
      <p className="mt-2">{output ? output : "No output yet."}</p>
    </div>
  );
};

export default OutputNode;
