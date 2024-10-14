import React from 'react';
import { useDrag } from 'react-dnd';
import { FaKeyboard, FaRobot, FaClipboard } from 'react-icons/fa';

const DraggableSidebarButton = ({ type, label, addNewNode, Icon }) => {
  const [, drag] = useDrag(() => ({
    type: "sidebarNode",
    item: { type },
  }));

  return (
    <button
      ref={drag}
      className="bg-white border border-black text-black px-3 py-2 mb-2 rounded transition duration-200 flex items-center hover:bg-gray-100"  // Updated styles
      onClick={() => addNewNode(type)}
    >
      <Icon className="mr-2" /> 
      {label} 
    </button>
  );
};

const Sidebar = ({ addNewNode }) => {
  return (
    <div className="flex flex-col px-12 bg-gray-100 p-4 border rounded-2xl shadow-xl">
      <h2 className="font-bold mb-4 text-lg text-left">Components</h2>
      <hr className="mb-4" />
      <h3 className="opacity-50 font-bold px-1 mb-4 text-left">Drag and Drop</h3>

      <div className="flex flex-col space-y-2 max-width">
        <DraggableSidebarButton
          type="inputNode"
          label="Input"
          addNewNode={addNewNode}
          Icon={FaKeyboard} 
        />
        <DraggableSidebarButton
          type="llmNode"
          label="LLM Engine"
          addNewNode={addNewNode}
          Icon={FaRobot} 
        />
        <DraggableSidebarButton
          type="outputNode"
          label="Output"
          addNewNode={addNewNode}
          Icon={FaClipboard} 
        />
      </div>
    </div>
  );
};

export default Sidebar;
