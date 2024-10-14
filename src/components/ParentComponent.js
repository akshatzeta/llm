// ParentComponent.js
import React, { useState } from 'react';
import WorkflowCanvas from './WorkflowCanvas';

const ParentComponent = () => {
    const [nodes, setNodes] = useState([]);
    const [connections, setConnections] = useState([]); // Initialize connections here

    // Function to add a new node
    const addNewNode = (type, position) => {
        const newNode = { id: Date.now(), type, x: position.x, y: position.y };
        setNodes((prevNodes) => [...prevNodes, newNode]);
    };

    // Function to move a node
    const moveNode = (id, newPosition) => {
        setNodes((prevNodes) => 
            prevNodes.map((node) => (node.id === id ? { ...node, ...newPosition } : node))
        );
    };

    // Example function to handle input submission
    const handleInputSubmit = (inputData) => {
        console.log("Input submitted:", inputData);
    };

    // Example function to handle settings submission
    const handleSettingsSubmit = (settingsData) => {
        console.log("Settings submitted:", settingsData);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Workflow Canvas</h1>
            <WorkflowCanvas
                nodes={nodes}
                connections={connections} // Pass connections state
                onInputSubmit={handleInputSubmit}
                onSettingsSubmit={handleSettingsSubmit}
                addNewNode={addNewNode}
                moveNode={moveNode}
            />
            {/* Example button to add nodes from a sidebar (replace with your actual UI) */}
            <button
                onClick={() => addNewNode('exampleNode', { x: 100, y: 100 })}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Add Node
            </button>
        </div>
    );
};

export default ParentComponent;
