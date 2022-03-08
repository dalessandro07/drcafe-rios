// 1) Necesitamos la variable React en scope
import React from 'react';

// 2) Necesitamos la variable ReactDOM en scope
import ReactDOM from 'react-dom';

// 3) Necesitamos un componente en scope
import App from './App';

// 4) Necesitamos poner el componente en el DOM
ReactDOM.render(<App />, document.getElementById('root'));
