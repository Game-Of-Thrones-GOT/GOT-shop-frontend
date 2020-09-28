import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import classes from './register.css';

class Signin extends Component {
    render() {
        return(
            <div>
                {/* <div className={classes.outer}>
                    <h1></h1>
                </div> */}

                <div className={classes.container}>
                    <div className={classes.left}>
                        <h1 style={{margin:'0',padding:'0'}}>Who are you?</h1>
                    </div>

                    <div className={classes.right}>
                        <h1 style={{color:'white'}}>GOT</h1>
                        <input placeholder='name' className={classes.input}></input><br/>
                       <input placeholder='id' className={classes.input}></input><br/>
                       <input placeholder='password' className={classes.input}></input><br/><br/>
                       <button className={classes.button}>register</button>
                       <Link to='/login'>
                            <p className={classes.reg}><span className={classes.bold}>Login</span></p>
                       </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signin;