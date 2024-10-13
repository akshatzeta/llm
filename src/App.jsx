// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WorkflowCanvas from './components/WorkflowCanvas';
import AssistantPage from './components/assistant/AssistantPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; 
import axios from 'axios';

const App = () => {
    const [nodes, setNodes] = useState([]); 
    const [output, setOutput] = useState('');
    const [settings, setSettings] = useState(null);

    const addNewNode = (type) => {
        const newNode = {
            id: Date.now(),
            type,
        };
        setNodes((prevNodes) => [...prevNodes, newNode]);
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
        <Router>
            <div className="flex flex-col h-screen bg-gray-200">
                {/* Only show Navbar and Sidebar when not on the Assistant page */}
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
    );
};

export default App;
