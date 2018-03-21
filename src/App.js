import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
// import DevTools from './DevTools';

const App = () => {
  return (
    <div>
      <div className="App">
         <CommentsListContainer/>
      </div>
      {/* <DevTools/> */}
    </div>
  );
};

export default App;
