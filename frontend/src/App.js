import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import MakePayment from './components/make-payment';
import CompletePayment from './components/complete-payment';

const App = () => {
  return (
    <BrowserRouter className="App">
      <Route path="/" exact component={MakePayment} />
      <Route path="/success" exact component={CompletePayment} />
    </BrowserRouter>
  );
}

export default App;
