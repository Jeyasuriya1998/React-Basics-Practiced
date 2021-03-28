import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicApp from './App';
import TodoApp from './App';
import JSXtoJSandBack from './App';
import CurrentTimeApp from './App';
import StatusOfDay from './App';
import ContactCards from './App';
import reportWebVitals from './reportWebVitals';
import JokeApp from './App';
import JokesDataApp from './App';
import ProductsApp from './App';
import ClassApp from './App';
import MultipleClassConnectionApp from './App';
import ConstructorClassApp from './App';
import LoginOrOurApp from './App';
import HandlingEvents from './App';
import ChangingState from './App';
import LifecycleMethods from'./App';
import ConditionalRenderingApp from './App';
import ConditionalRenderingApp2 from './App';
import ConditionaRenPractice from './App';
import FetchDataApp from './App';
import FromApp1 from './App';
import FormPracticeApp from './App'
import MemeApp from './App';

function Main(){
  return(
    <div>
      <h1>Main Content</h1>
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <Main/>
    <MemeApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
