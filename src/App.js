import React from 'react';
import {Route} from 'react-router-dom'

import Navbar from './container/Navbar/Navbar.js';
import Landing from './container/Landing/Landing.js';
import Login from './container/login/Login.js';
import Home from './container/Home/Home.js';
import Test from './components/slideShow/slideShow.js'
import Test from './components/Toolbar/Toolbar.js'


function App() {
  return (
  	<div>
		<div>
		<Route path="/" exact component={Navbar} />
    	<Route path="/" exact component={Landing} />
    	<Route path="/login" component={Login} />
		<Route path="/home" component={Home}/>
		<Route path="/test" component={Test}/>
	</div>

	</div>
  );
}

export default App;