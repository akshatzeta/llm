import React, { useState } from 'react';

const InputNode = ({ onInputSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onInputSubmit(input);
  };

  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">INPUT</h3>
      <form onSubmit={handleSubmit}>
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
