import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableNode = ({ id, x, y, children }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "node",
        item: { id, x, y },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, x, y]);

    return (
        <div
            ref={drag}
            className="absolute"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                opacity: isDragging ? 0.5 : 10,
                cursor: 'move',
            }}
        >
            {children}
        </div>
    );
};

export default DraggableNode;
