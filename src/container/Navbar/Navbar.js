import React from 'react'
import classes from './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <ul className={classes.list}>
                
                <li className={classes.item}>Home</li>
                <div className={classes.box}>
                    <Link to='/about'>
                        <li style={{textDecoration:'none'}} className={classes.item}>About</li>
                    </Link>   
                    <li className={classes.item}>contact</li>
                </div>
               
            </ul>
        </div>
    )
}

export default Navbar
