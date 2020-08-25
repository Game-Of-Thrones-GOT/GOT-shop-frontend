import React from 'react';
import Home from './container/signin/Signin.js'
import Navbar from './container/Navbar/Navbar.js';
import Landing from './container/Landing/Landing.js';

function App() {
  return (
  	<div>
		<Navbar/>
		<Landing/>
    	{/* <Home/> */}
	</div>
  );
}

export default App;