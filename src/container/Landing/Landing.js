import React from 'react'
import classes from './Landing.css'
import {Link} from 'react-router-dom'

const Landing =() => {
    return (
        <div className={classes.Landing}>
            <div className={classes.middlebox}>
                <div className={classes.wrap}>
                <p className={classes.para1}>Hurry</p>
                <h1 className={classes.head}>Winter is coming!</h1>
                <p className={classes.para2}>Shop now</p>
                </div>
                <div className={classes.btnContainer}>
                    <Link to='/login'>
                        <button className={classes.btn}>login</button>
                    </Link>
                    <Link to='/register'>
                        <button className={classes.btn}>Signup</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Landing
