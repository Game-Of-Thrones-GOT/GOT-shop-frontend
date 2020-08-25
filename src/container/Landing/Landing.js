import React from 'react'
import classes from './Landing.css'

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
                    <button className={classes.btn}>login</button>
                    <button className={classes.btn}>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Landing
