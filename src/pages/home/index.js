import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './index.less';

class Home extends Component {
  render () {
    return (
      <div className="home">
        <h1>Home Page</h1>
      </div>
    );
  }

  componentWillMount () {
    // this.props.history.push ('/login');
  }
}

export default Home;
