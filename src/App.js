import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

// 引入组件
import Home from '@/pages/home';
import Login from '@/pages/login/loadable';
import Register from '@/pages/register/loadable';
import Resetpassword from '@/pages/resetpassword/loadable';
// 引入文件
import store from '@/store';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Provider store={store}>
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/home" exact component={Home} />
						<Route path="/Login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/resetpassword" component={Resetpassword} />
						<Route path="/qq" render={() => <div>qq</div>} />
						<Route path="/wechat" render={() => <div>wechat</div>} />
					</Switch>
				</Provider>
			</div>
		);
	}

	componentWillMount() {
		console.log();
	}
}

export default App;
