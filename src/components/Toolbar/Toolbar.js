import React, {Component} from 'react';

import classes from './Toolbar.css';

class Signin extends Component {
    render() {
        return(
            <div className={classes.container}>
               
              <h3 className={classes.title}>G O T</h3>

              <div className={classes.menu}>
                  <h4 className={classes.tab}>Home</h4>
                  <h4 className={classes.tab}>Orders</h4>
                  <h4 className={classes.tab}>About</h4>
              </div>

            </div>
            
        )
    }
}

export default Signin;