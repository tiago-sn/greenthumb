import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/containers/Home';
import Sunlight from './components/containers/Sunlight';
import Water from './components/containers/Water';
import Pets from './components/containers/Pets';
import Results from './components/containers/Results';
import Purchase from './components/containers/Purchase';

import store from './store';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home linkTo="/sunlight" />
            </Route>

            <Route path="/sunlight">
              <Sunlight
                previous="/"
                linkTo="/water"
              />
            </Route>

            <Route path="/water">
              <Water
                previous="/sunlight"
                linkTo="/pets"
              />
            </Route>

            <Route path="/pets">
              <Pets
                previous="/water"
                linkTo="/results"
              />
            </Route>

            <Route path="/results">
              <Results linkTo="/purchase" />
            </Route>

            <Route path="/purchase">
              <Purchase />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
