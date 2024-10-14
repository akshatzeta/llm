import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import InputSection from './InputSection';




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
