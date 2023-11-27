import type { Component } from 'solid-js';


import logo from './logo.svg';
import styles from './App.module.css';
// import Incident from './Containers/incident_management/incident_Tabular';
import Root from './routing/routing-component'

const App: Component = () => {
  return (
    <Root/>
  );
};

export default App;