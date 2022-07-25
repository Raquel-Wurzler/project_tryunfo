import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Form />
        <Card />
      </main>
    );
  }
}

export default App;
