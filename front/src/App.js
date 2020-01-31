import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import DataReader from './components/DataReader';

class App extends Component {

  render() {
    return (
      <div>
        <PostForm /> 
        <DataReader />
      </div>
    );
  }
}

export default App;
