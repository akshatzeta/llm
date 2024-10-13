import React from 'react';

const MainContent = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-grow p-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Ask the AI Assistant Anything</h2>
      <p className="text-gray-600 max-w-lg">
        Ask me anything, and I'll do my best to provide you with accurate and helpful information, whether you're looking for answers, guidance, or just curious about the world around you.
      </p>
    </main>
  );
};

export default MainContent;
