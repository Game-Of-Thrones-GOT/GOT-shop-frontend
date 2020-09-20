import React, {Component} from 'react';

import classes from './Toolbar.css';

class Signin extends Component {
    render() {
        return(
            <div className={classes.container}>
               
              <h3 className={classes.title}>G O T</h3>

              <div className={classes.menu}>
                  <h4 style={{cursor: "pointer"}}>Home</h4>
                  <h4 style={{cursor: "pointer"}}>Orders</h4>
                  <h4 style={{cursor: "pointer"}}>ABout</h4>
              </div>

            </div>
            
        )
    }
}

export default Signin;