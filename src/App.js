import React from 'react';
import {Route} from 'react-router-dom'

import Navbar from './container/Navbar/Navbar.js';
import Landing from './container/Landing/Landing.js';
import Login from './container/login/Login.js';
<<<<<<< HEAD
import Register from './container/register/register.js';
import Home from './container/Home/Home.js';
import Test from './components/slideShow/slideShow.js'
=======
import Home from './container/Home/Home.js';
import Test from './components/Toolbar/Toolbar.js'
>>>>>>> f66adb7c21c8768d3af7246a6d93ac34da9c1395


function App() {
  return (
  	<div>
		<div>
		<Route path="/" exact component={Navbar} />
    	<Route path="/" exact component={Landing} />
    	<Route path="/login" component={Login} />
<<<<<<< HEAD
		<Route path="/register" component={Register} />
=======
    	<Route path="/register" component={Register} />
>>>>>>> f66adb7c21c8768d3af7246a6d93ac34da9c1395
		<Route path="/home" component={Home}/>
		<Route path="/test" component={Test}/>
	</div>

	</div>
  );
}

export default App;