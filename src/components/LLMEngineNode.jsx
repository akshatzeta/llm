import React, { useState } from 'react';
import Select from 'react-select';

const models = [
  { value: 'gpt-3.5', label: 'gpt-3.5' },
  { value: 'gpt-4', label: 'gpt-4' }
];

const LLMEngineNode = ({ onSettingsSubmit }) => {
  const [model, setModel] = useState(models[0]);
  const [apiKey, setApiKey] = useState('');
  const [maxTokens, setMaxTokens] = useState(2000);
  const [temperature, setTemperature] = useState(0.5);
  const [apiBase, setApiBase] = useState('https://api.openai.com/v1/chat/completions');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsSubmit({
      model: model.value,
      apiKey,
      maxTokens,
      temperature,
      apiBase,
    });
  };

  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">LLM ENGINE</h3>
      <form onSubmit={handleSubmit}>
        <label>Model Name:</label>
        <Select 
          options={models}
          value={model}
          onChange={(selectedModel) => setModel(selectedModel)}
          className="mt-2 mb-4"
        />
        <label>OpenAI API Base:</label>
        <input 
          type="text"
          value={apiBase}
          onChange={(e) => setApiBase(e.target.value)}
          className="w-full p-2 border rounded mt-2 mb-4"
        />
        <label>OpenAI Key:</label>
        <input 
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 border rounded mt-2 mb-4"
        />
        <label>Max Tokens:</label>
        <input 
          type="number"
          value={maxTokens}
          onChange={(e) => setMaxTokens(e.target.value)}
          className="w-full p-2 border rounded mt-2 mb-4"
        />
        <label>Temperature:</label>
        <input 
          type="number"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full p-2 border rounded mt-2 mb-4"
        />
        <button type="submit" className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
          Deploy
        </button>
      </form>
    </div>
  );
};

export default LLMEngineNode;
