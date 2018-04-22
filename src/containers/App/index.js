import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Search from 'containers/Search';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet
          titleTemplate="%s - Thunk-Observable"
          defaultTitle="Thunk-Observable"
        >
          <meta
            name="description"
            content="A demo app using Observables as a progressive enhancement for Redux Thunks"
          />
        </Helmet>
        <header className="App-header">
          <h1 className="App-title">Thunk-Observable</h1>
        </header>
        <main className="App-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
