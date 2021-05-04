import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App.jsx';

// render(<App/>, document.getElementById('root'));

if (module.hot) module.hot.accept();

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );