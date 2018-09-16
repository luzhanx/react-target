import React, {Component} from 'react';
// import {Toast} from 'antd-mobile';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './index.less';

class Register extends Component {
  // constructor (props) {
  //   super (props);
  // }

  render () {
    return (
      <div className="register">
        <h1>Register Page</h1>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    xxx: store.xxx,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    func () {
      dispatch ();
    },
  };
};
export default connect (mapStateToProps, mapDispatchToProps) (Register);
