import React from 'react';
import { useDrag } from 'react-dnd';
import { FaKeyboard, FaRobot, FaClipboard } from 'react-icons/fa';

const DraggableSidebarButton = ({ type, label, bgColorClass, addNewNode, Icon }) => {
  const [, drag] = useDrag(() => ({
    type: "sidebarNode",
    item: { type },
  }));

  return (
    <button
      ref={drag}
      className={`${bgColorClass} hover:opacity-80 text-white px-3 py-2 mb-2 rounded transition duration-200 flex items-center`}
      onClick={() => addNewNode(type)}
    >
      
      <Icon className="mr-2" /> {/* Logo */}
      {label} {/* Text */}
    </button>
  );
};

const Sidebar = ({ addNewNode }) => {
  return (
    <div className="flex flex-col px-12 bg-gray-100 p-4 border rounded-2xl shadow-xl">
      {/* Left-align the text in the title and subtitle */}
      <h2 className="font-bold mb-4 text-lg text-left">Components</h2>
      <hr className="mb-4" />
      <h3 className="opacity-50 font-bold px-1 mb-4 text-left">Drag and Drop</h3>

      <div className="flex flex-col space-y-2 max-width">
        {/* Draggable buttons with icons */}
        <DraggableSidebarButton
          type="inputNode"
          label="Input"
          bgColorClass="bg-green-500"
          addNewNode={addNewNode}
          Icon={FaKeyboard} // Example keyboard icon
        />
        <DraggableSidebarButton
          type="llmNode"
          label="LLM Engine"
          bgColorClass="bg-yellow-500"
          addNewNode={addNewNode}
          Icon={FaRobot} // Example robot icon for LLM engine
        />
        <DraggableSidebarButton
          type="outputNode"
          label="Output"
          bgColorClass="bg-red-500"
          addNewNode={addNewNode}
          Icon={FaClipboard} // Example clipboard icon for Output
        />
      </div>
    </div>
  );
};

export default Sidebar;
