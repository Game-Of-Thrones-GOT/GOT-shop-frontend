import React, {Component} from 'react';

import classes from './Signin.css';
import manyFacesGod from '../../assets/manyFacesGod.png'


class Signin extends Component {
    render() {
        return(
            <div className={classes.container}>
                <div className={classes.left}>
                    <img src={manyFacesGod} className={classes.logo}/>
                </div>

                <div className={classes.rightContainer}>
                    <div className={classes.middle}>
                    <h1>WHO ARE YOU?</h1><br/><br/><br/><br/><br/><br/>
                    <h2>Niche valar morghulis!</h2>
                    </div>

                    <div className={classes.right}>
                        <div className={classes.form}>
                            <br/><br/><br/>
                            <h1 style={{color:"white"}}>G O T</h1><br/>
                            <input placeholder='email' className={classes.input}></input><br/>
                            <input placeholder='password' className={classes.input}></input><br/>
                            <button className={classes.button}>signin</button><br/>
                            <a className={classes.register}>i'm no one! (register)</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;