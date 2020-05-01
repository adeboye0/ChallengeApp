import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/Home/Home';
import Single from './components/Single/Single';
import Add from './components/Add/Add';
import error404 from './components/notFound/error404';

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/view/:tnx_id' component={Single} />
                <Route exact path='/add' component={Add} />
                <Route path='/404' component={error404} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider >
    );
  }
}
export default App;
