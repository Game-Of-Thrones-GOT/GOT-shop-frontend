import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar.js'

import classes from './Home.css';

class Signin extends Component {
    render() {
        return(
            <div>
               
               <div className={classes.block1} >
                   <Toolbar/>
                   <div className={classes.header}>
                        <h1>Winter is coming!</h1>
                        <p>Shop now.</p>
                   </div>                 
               </div>

               <h1>hello</h1>

            </div>
            
        )
    }
}

export default Signin;