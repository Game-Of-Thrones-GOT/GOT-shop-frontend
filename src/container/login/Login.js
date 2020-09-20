import React, {Component} from 'react';

import classes from './login.css';

class Signin extends Component {
    render() {
        return(
            <div>
                {/* <div className={classes.outer}>
                    <h1></h1>
                </div> */}

                <div className={classes.container}>
                    <div className={classes.left}>
                        <h1  className={classes.head}>Who</h1>
                        <h1  className={classes.head}>Are</h1>
                        <h1  className={classes.head}>You?</h1>
                    </div>

                    <div className={classes.right}>
                        <h1>G O T</h1>
                       <input placeholder='id' className={classes.input}></input><br/>
                       <input placeholder='password' className={classes.input}></input><br/><br/>
                       <button className={classes.button}>login</button>
                       <p className={classes.reg}>I am no one! <span className={classes.bold}>Register</span></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signin;