import React from 'react';
import logo from './logo.svg';
import '../src/assets/styles/app.scss';
import Airpollution from './feature/airpollution/container/airpollution';

function App() {
  return (
    <div className="App">
      <Airpollution />
    </div>
  );
}

export default App;
