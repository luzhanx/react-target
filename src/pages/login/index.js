import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

import logoImg from '@/assets/img/logo.png';
import qqImg from '@/assets/img/qq.png';
import wechatImg from '@/assets/img/wechat.png';

import './index.less';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientHeight: {
				height: '100vh'
			}
		};
	}

	render() {
		return (
			<div className="login" style={this.state.clientHeight}>
				<img src={logoImg} alt="" className="logo ball" />
				<input type="text" className="input" placeholder="账号" ref={(input) => (this.account = input)} />
				<input type="password" className="input" placeholder="密码" ref={(input) => (this.password = input)} />
				<div className="submit" onClick={() => this.handleSubmit(this.account, this.password)}>
					登录
				</div>
				<div className="links">
					<Link to="/resetpassword" className="link">
						忘记密码？
					</Link>
					<Link to="/register" className="link">
						新用户注册
					</Link>
				</div>

				<div className="lineText">
					<span className="text">or</span>
				</div>

				<div className="additional">
					<Link to="/qq" className="itional">
						<img src={qqImg} alt="" className="icon" />
						<div className="text">QQ登录</div>
					</Link>
					<Link to="/weichat" className="itional">
						<img src={wechatImg} alt="" className="icon" />
						<div className="text">微信登录</div>
					</Link>
				</div>

				<div className="footer">
					登录即代表阅读并同意<span className="link">服务条款</span>
				</div>
			</div>
		);
	}

	// 登录
	handleSubmit = (account, password) => {
		// let that = this;

		// if (account.value === '') {
		// 	Toast.fail('请输入账号', 1);
		// 	return;
		// }
		// if (password.value === '') {
		// 	Toast.fail('请输入密码', 1);
		// 	return;
		// }

		// if (password.value.length < 6) {
		// 	Toast.fail('密码不能少于6位数', 1);
		// 	return;
		// }

		Toast.loading('登录中');

		let data = {
			username: 'admin',
			password: '123456'
		};
		let AUTH_TOKEN = 'tttttttttttttttttttttttoken';

		Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
		Axios.defaults.withcredentials = true;

		console.log(Axios.defaults);
		Axios.get('/', data)
			.then((result) => {
				// 输出登录的结果
				console.log(result);
				Toast.hide();
			})
			.catch((e) => {
				console.log(e);
				Toast.hide();
			});

		// setTimeout(() => {
		// 	Toast.success('登录成功', 2);
		// 	that.props.history.push('/home');
		// }, 2000);
	};
	componentWillMount() {}
	componentDidMount() {
		this.setState({
			clientHeight: {
				height: `${document.body.clientHeight}px`
			}
		});
		window.onresize = () => {
			if (!/mobile/i.test(navigator.userAgent)) {
				this.setState(
					{
						clientHeight: {
							height: '100vh'
						}
					},
					() => {
						this.setState({
							clientHeight: {
								height: `${document.body.clientHeight}px`
							}
						});
					}
				);
			}
		};
	}
}
const mapStateToProps = (store) => {
	return {
		xxx: store.xxx
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		func() {
			dispatch();
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
