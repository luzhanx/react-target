import React, {Component} from 'react';
// import {Toast} from 'antd-mobile';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './index.less';

class Resetpassword extends Component {
  // constructor (props) {
  //   super (props);
  // }

  render () {
    return (
      <div className="resetpassword">
        <div className="h1">Resetpassword Page</div>
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
export default connect (mapStateToProps, mapDispatchToProps) (Resetpassword);
