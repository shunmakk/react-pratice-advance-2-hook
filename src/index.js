import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateEffect from './Components/StateEffect';
import HookTimer from './Components/HookTimer';
// import HookEffect from './Components/HookEffect';
import HookRefNg from './Components/HookRefNg';
import HookRef from './Components/HookRef';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StateEffect init={0}/>
    <HookTimer init={100000}/>
    {/* <HookEffect init={10}/> 警告が出るため非表示 */}
    <HookRefNg/>
    <HookRef/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
