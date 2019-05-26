import React from 'react';
import './App.css';
import Header from './components/header/Header'
// import Router from './components/router/router'
import Main from './Main'

function App() {
  return (
      <div className="App">
        <Header />
        <Main />
        {/* <Router /> */}
      </div>
  );
}

export default App;
