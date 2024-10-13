import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-50 border-b border-gray-200">
      <div className="text-xl font-bold">OpenAGI</div>
      <div className="text-lg">AI Assistant</div>
    </header>
  );
};

export default Header;
