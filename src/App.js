import React from 'react';
import {Route} from 'react-router-dom'

import Signin from './container/signin/Signin.js'
import Register from './container/register/register.js'
import Navbar from './container/Navbar/Navbar.js';
import Landing from './container/Landing/Landing.js';
import Login from './container/login/Login.js';


function App() {
  return (
  	<div>
		<div>
		<Route path="/" exact component={Navbar} />
    	<Route path="/" exact component={Landing} />
    	<Route path="/signin" component={Login} />
    	<Route path="/register" component={Register} />
	</div>

	</div>
  );
}

export default App;