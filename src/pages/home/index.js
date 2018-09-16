import React, {Component} from 'react';

class Home extends Component {
  render () {
    return (
      <div className="home">
        <h1>Homessss</h1>
      </div>
    );
  }

  componentWillMount () {
    this.props.history.push ('/login');
  }
}

export default Home;
