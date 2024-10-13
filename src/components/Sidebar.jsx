import React from 'react';

const Sidebar = ({ addNewNode }) => {
  return (
    <div className="px-5 bg-gray-100 p-4 border rounded-2xl shadow-xl">
      <h2 className="font-bold mb-4 text-lg">Components</h2>
      <hr className="mb-4" />
      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 mb-2 rounded transition duration-200"
        onClick={() => addNewNode('inputNode')}
      >
        Input
      </button>
      <button
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 mb-2 rounded transition duration-200"
        onClick={() => addNewNode('llmNode')}
      >
        LLM Engine
      </button>
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded transition duration-200"
        onClick={() => addNewNode('outputNode')}
      >
        Output
      </button>
    </div>
  );
};

export default Sidebar;
