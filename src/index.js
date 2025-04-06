import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 禁用React开发工具提示
const disableReactDevTools = () => {
  // 禁用__REACT_DEVTOOLS_GLOBAL_HOOK__
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (let key in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      let value = window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key];
      
      if (key === 'renderers') {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = new Map();
      } else {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
          typeof value === 'function' ? () => {} : null;
      }
    }
  }
};

// 在生产环境中禁用开发工具提示
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
