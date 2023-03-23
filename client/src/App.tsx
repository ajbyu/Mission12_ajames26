import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './heading';
import TeamList from './teamList';
import Team from './team';

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;