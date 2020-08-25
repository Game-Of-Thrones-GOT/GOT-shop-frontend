import React from 'react'
import classes from './Navbar.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <ul className={classes.list}>
                <li className={classes.item}>Home</li>
                <div className={classes.box}>
                    <li className={classes.item}>About</li>
                    <li className={classes.item}>contact</li>
                </div>
               
            </ul>
        </div>
    )
}

export default Navbar
