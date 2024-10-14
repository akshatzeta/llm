import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'; 

const Navbar = ({ onSaveSettings, onSendToLLM }) => {
    return (
        <div className="flex justify-between items-center text-black p-4 shadow-md bg-white">
            <h1 className="text-xl font-bold">OpenAIG</h1>

            <div className="flex items-center">
                <button 
                    onClick={onSendToLLM} 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center space-x-2"
                >
                    <PlayIcon className="h-5 w-5 text-white" />  
                    <span>Run</span>
                </button>
                
                <button 
                    onClick={onSaveSettings} 
                    className="ml-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                    Deploy
                </button>
            </div>
        </div>
    );
};

export default Navbar;
