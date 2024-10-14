import React, { useState } from 'react';

const InputNode = ({ onInputSubmit }) => {
  const [input, setInput] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      setShowPopup(true); // Show popup if input is empty
    } else {
      onInputSubmit(input);
      setInput(''); // Clear input after submission
      setShowPopup(false); // Hide popup after submission
    }
  };

  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">INPUT</h3>
      <form onSubmit={handleSubmit}>
        {/* Popup message for empty input */}
        {showPopup && (
          <div className="mb-2 text-red-600 bg-red-100 border border-red-200 rounded-lg p-2">
            Please enter a question!
          </div>
        )}
        <label>Write the input/question you want to ask:</label>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        />
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Run
        </button>
      </form>
    </div>
  );
};

export default InputNode;
