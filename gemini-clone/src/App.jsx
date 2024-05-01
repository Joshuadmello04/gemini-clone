import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="flex flex-grow">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Main />

      </div>
    </div>
  );
};

export default App;
