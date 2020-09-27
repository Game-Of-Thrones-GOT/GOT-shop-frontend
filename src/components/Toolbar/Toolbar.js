import React, {Component} from 'react';

import classes from './Toolbar.css';

class Signin extends Component {
    render() {
        return(
            <div className={classes.container}>
               
              <h3 className={classes.title}>G O T</h3>

              <div className={classes.menu}>
<<<<<<< HEAD
                  <h4 className={classes.tab}>Home</h4>
                  <h4 className={classes.tab}>Orders</h4>
                  <h4 className={classes.tab}>About</h4>
=======
                  <h4 style={{cursor: "pointer"}}>Home</h4>
                  <h4 style={{cursor: "pointer"}}>Orders</h4>
                  <h4 style={{cursor: "pointer"}}>About</h4>
>>>>>>> f66adb7c21c8768d3af7246a6d93ac34da9c1395
              </div>

            </div>
            
        )
    }
}

export default Signin;