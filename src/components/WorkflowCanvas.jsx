// src/components/WorkflowCanvas.jsx
import React from 'react';
import InputNode from './InputNode';
import LLMEngineNode from './LLMEngineNode';
import OutputNode from './OutputNode';

const WorkflowCanvas = ({ nodes, onInputSubmit, onSettingsSubmit, output }) => {
    return (
        <div className="flex justify-around items-start">
            {nodes.length > 0 ? (
                nodes.map((node) => {
                    const NodeComponent = 
                        node.type === 'inputNode' ? InputNode :
                        node.type === 'llmNode' ? LLMEngineNode :
                        node.type === 'outputNode' ? OutputNode :
                        null;

                    return NodeComponent ? (
                        <div key={node.id} className=" p-2 m-2 flex-shrink-0 w-1/3 rounded-3xl"> 
                            <NodeComponent 
                                onInputSubmit={onInputSubmit} 
                                onSettingsSubmit={onSettingsSubmit} 
                                output={output} 
                            />
                        </div>
                    ) : null;
                })
            ) : (
                <p>No nodes added. Please add a node from the sidebar.</p>
            )}
        </div>
    );
};

export default WorkflowCanvas;
