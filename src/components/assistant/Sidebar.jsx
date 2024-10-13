import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200 p-4">
      <button className="w-full py-2 px-4 bg-white border border-gray-300 rounded-md mb-6">
        + Start new chat
      </button>
      <div className="space-y-4">
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">
          Create 10 poems for a scenario...
        </p>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">
          Generate a poem on designing...
        </p>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">
          Create 5 liner poem
        </p>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">
          Create a rich in metaphor poem...
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
