import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from "./store/store"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from './App'
import FullJob from "./components/FullJob"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/job/:id" component={FullJob}/>
          </Switch>
        </div> 
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
