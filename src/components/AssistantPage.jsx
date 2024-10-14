import React from 'react';
import Sidebar from './assistant/Sidebar';
import Header from './assistant/Header';
import MainContent from './assistant/MainContent';
import InputSection from './assistant/InputSection';




const AssistantPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <MainContent />
      </div>
      <InputSection />
    </div>
  );
};

export default AssistantPage;
