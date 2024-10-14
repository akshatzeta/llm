import React from 'react';
import { useDrop } from 'react-dnd';
import Xarrow from 'react-xarrows'; 
import InputNode from './InputNode';
import LLMEngineNode from './LLMEngineNode';
import OutputNode from './OutputNode';
import DraggableNode from './DraggableNode';

const WorkflowCanvas = ({ nodes, onInputSubmit, onSettingsSubmit, output, moveNode, addNewNode }) => {
    const [, drop] = useDrop(() => ({
        accept: ["node", "sidebarNode"],
        drop: (item, monitor) => {
            const delta = monitor.getClientOffset();

            if (item.type) {
                const canvasPosition = {
                    x: delta.x,
                    y: delta.y,
                };
                addNewNode(item.type, canvasPosition);
            } else {
                const delta = monitor.getDifferenceFromInitialOffset();
                const newPosition = {
                    x: item.x + delta.x,
                    y: item.y + delta.y,
                };
                moveNode(item.id, newPosition);
            }
        },
    }), [moveNode, addNewNode]);

    return (
        <div ref={drop} className="flex-grow relative overflow-auto" style={{ minHeight: '100vh' }}>
            {nodes.length > 0 ? (
                <>
                    {nodes.map((node) => {
                        const NodeComponent =
                            node.type === 'inputNode' ? InputNode :
                            node.type === 'llmNode' ? LLMEngineNode :
                            node.type === 'outputNode' ? OutputNode :
                            null;

                        return NodeComponent ? (
                            <DraggableNode key={node.id} id={node.id} x={node.x} y={node.y}>
                                <div id={`node-${node.id}`} className="m-2 flex-shrink-0 w-80 h-auto rounded-3xl bg-gray-100 shadow-lg">
                                    <NodeComponent
                                        onInputSubmit={onInputSubmit}
                                        onSettingsSubmit={onSettingsSubmit}
                                        output={output}
                                    />
                                </div>
                            </DraggableNode>
                        ) : null;
                    })}

                   
                    {nodes.map((node, index) => {
                        
                        const nextNode = nodes[index + 1];
                        if (nextNode) {
                            return (
                                <Xarrow
                                    key={`arrow-${node.id}-to-${nextNode.id}`}
                                    start={`node-${node.id}`}
                                    end={`node-${nextNode.id}`}
                                    color="black"
                                    strokeWidth={2}
                                    curveness={0.5}
                                />
                            );
                        }
                        return null;
                    })}
                </>
            ) : (
                <p>No nodes added. Please add a node from the sidebar.</p>
            )}
        </div>
    );
};

export default WorkflowCanvas;
