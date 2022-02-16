import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = (props) => {
  console.log(props); //There are no props in React Router v6
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
        <Switch> {/* This is the equivalent to Routes in React Router v6 */}
          <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage}/>
        </Switch>
     
    </div>
  );
}


export default App;
