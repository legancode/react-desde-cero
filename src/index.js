import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root')

// const element = React.createElement(component, props, children)

// Sin jsx
// const element = React.createElement("h1", { className: "saludo" }, "Hola mundo")

// Con jsx
ReactDOM.render(<App />, root);
