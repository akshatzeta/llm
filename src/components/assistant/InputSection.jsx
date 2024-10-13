import React from 'react';

const InputSection = () => {
  return (
    <div className="flex items-center p-4 bg-gray-50 border-t border-gray-200">
      <input
        type="text"
        placeholder="Write your message"
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg">
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default InputSection;
