import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";

function log() {
  console.log("ihr schweine");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Build your own component libary here.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PrimaryButton />
      </header>
    </div>
  );
}

export default App;
