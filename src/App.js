import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '@/pages/home';
import Login from '@/pages/login';

class App extends Component {
  render () {
    return (
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/register" render={() => <div>register</div>} />
          <Route
            path="/resetpassword"
            render={() => <div>resetpassworld</div>}
          />
          <Route path="/qq" render={() => <div>qq</div>} />
          <Route path="/wechat" render={() => <div>wechat</div>} />
        </Switch>
      </div>
    );
  }

  componentWillMount () {
    console.log ();
  }
}

export default  (App);
