import { OpenAI } from 'openai';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WorkflowCanvas from './components/WorkflowCanvas';
import AssistantPage from './components/assistant/AssistantPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
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
            x: position.x,  
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
        const openai = new OpenAI({
          apiKey: settings.apiKey,  
          dangerouslyAllowBrowser: true
        });
    
        const response = await openai.chat.completions.create({
          model: settings.model,
          messages: [{ role: "user", content: inputText }],
          max_tokens: settings.maxTokens,
          temperature: settings.temperature,
        });
    
        setOutput(response.choices[0].message.content);
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
                <div className="flex flex-col bg-gray-200">
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
                                            addNewNode={addNewNode} 
                                        />
                                    </div>
                                </>
                            } 
                        />
                        <Route path="/assistant" element={<AssistantPage />} />
                    </Routes>
                    <div className="fixed bottom-5 right-5">
                        <Link to="/assistant" className="bg-blue-500 text-white rounded-full p-3 shadow-lg">
                            🤖
                        </Link>
                    </div>     
                </div>
            </Router>
        </DndProvider>
    );
};

export default App;
