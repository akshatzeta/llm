import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkflowCanvas from './components/WorkflowCanvas';
import AssistantPage from './components/assistant/AssistantPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
    const [nodes, setNodes] = useState([]); 
    const [output, setOutput] = useState('');
    const [settings, setSettings] = useState(null);

    const addNewNode = (type, position = { x: 100, y: 100 }) => {
        const newNode = {
            id: Date.now(),
            type,
            x: position.x,  // Set the position based on the drop location
            y: position.y,
        };
        setNodes((prevNodes) => [...prevNodes, newNode]);
    };

    const moveNode = (id, newPosition) => {
        setNodes((prevNodes) => 
            prevNodes.map((node) =>
                node.id === id ? { ...node, x: newPosition.x, y: newPosition.y } : node
            )
        );
    };

    const handleInputSubmit = (inputText) => {
        if (settings) {
            runLLMEngine(inputText);
        } else {
            alert("Please configure the LLM Engine settings first.");
        }
    };

    const handleSettingsSubmit = (settingsData) => {
        setSettings(settingsData);
    };

    const runLLMEngine = async (inputText) => {
        if (!settings || !settings.apiKey) {
            alert("API Key is missing!");
            return;
        }

        try {
            const response = await axios.post(settings.apiBase, {
                model: settings.model,
                messages: [{ role: "user", content: inputText }],
                max_tokens: settings.maxTokens,
                temperature: settings.temperature,
            }, {
                headers: {
                    'Authorization': `Bearer ${settings.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            setOutput(response.data.choices[0].message.content);
        } catch (error) {
            console.error("Error during API call:", error);
            setOutput("Error occurred while fetching response.");
        }
    };

    const saveSettings = () => {
        if (settings) {
            alert("Settings saved!");
        } else {
            alert("No settings to save.");
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Router>
                <div className="flex flex-col h-screen bg-gray-200">
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <Navbar 
                                        onSaveSettings={saveSettings} 
                                        onInputSubmit={handleInputSubmit} 
                                    /> 
                                    <div className="flex flex-1 p-3">
                                        <Sidebar addNewNode={addNewNode} />
                                        <WorkflowCanvas 
                                            nodes={nodes} 
                                            onInputSubmit={handleInputSubmit} 
                                            onSettingsSubmit={handleSettingsSubmit} 
                                            output={output}
                                            moveNode={moveNode}
                                            addNewNode={addNewNode} // Pass the new function
                                        />
                                    </div>
                                </>
                            } 
                        />
                        <Route path="/assistant" element={<AssistantPage />} />
                    </Routes>
                    <div className="flex justify-center p-4 bg-gray-300">
                        <p>Copyright © 2024 YourApp</p>
                    </div>
                </div>
            </Router>
        </DndProvider>
    );
};

export default App;
