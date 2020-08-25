import React, {Component} from 'react';

import classes from './register.css';
import manyFacesGod from '../../assets/manyFacesGod.png'


class Register extends Component {
    render() {
        return(
            <div className={classes.container}>
                
                    <img src={manyFacesGod} className={classes.logo}/>

                <div className={classes.rightContainer}>
                    <div className={classes.middle}>
                    <h1>WHO ARE YOU?</h1><br/><br/><br/><br/><br/><br/>
                    <h2>Niche valar morghulis!</h2>
                    </div>

                    <div className={classes.right}>
                        <div className={classes.form}>
                            <br/><br/>
                            <h1 style={{color:"white"}}>G O T</h1><br/>
                            <input placeholder='name' className={classes.input}></input><br/>
                            <input placeholder='email' className={classes.input}></input><br/>
                            <input placeholder='password' className={classes.input}></input><br/><br/>
                            <button className={classes.button}>register</button><br/>
                            <a className={classes.register}>sigin</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;