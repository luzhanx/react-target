import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import headerbgImg from '@/assets/img//headerbg.png';
import avatarImg from '@/assets/img/qq.png';

import './index.less';

// header背景图
const headerBg = {
	backgroundImage: `url(${headerbgImg})`
};

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="nav">小目标</div>
				<div className="header" style={headerBg}>
					<div className="avatar">
						<img src={avatarImg} alt="" className="avatarImg" />
					</div>
				</div>
			</div>
		);
	}

	componentWillMount() {
		// this.props.history.push ('/login');
	}
}

export default Home;
