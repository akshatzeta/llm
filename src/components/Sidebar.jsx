import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableSidebarButton = ({ type, label, color, addNewNode }) => {
  const [, drag] = useDrag(() => ({
    type: "sidebarNode",
    item: { type },
  }));

  return (
    <button
      ref={drag} 
      className={`w-full bg-${color}-500 hover:bg-${color}-600 text-white px-3 py-2 mb-2 rounded transition duration-200`}
      onClick={() => addNewNode(type)} 
    >
      {label}
    </button>
  );
};

const Sidebar = ({ addNewNode }) => {
  return (
    <div className="px-5 bg-gray-100 p-4 border rounded-2xl shadow-xl">
      <h2 className="font-bold mb-4 text-lg">Components</h2>
      <hr className="mb-4" />
      <h3 className='opacity-20 font-bold px-1 mb-4'>Drag and Drop</h3>
      <DraggableSidebarButton
        type="inputNode"
        label="Input"
        color="green"
        addNewNode={addNewNode}
      />
      <DraggableSidebarButton
        type="llmNode"
        label="LLM Engine"
        color="yellow"
        addNewNode={addNewNode}
      />
      <DraggableSidebarButton
        type="outputNode"
        label="Output"
        color="red"
        addNewNode={addNewNode}
      />
    </div>
  );
};

export default Sidebar;
