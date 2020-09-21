import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar.js'

import nightKing from '../../assets/nightKing.jpg';
import drogon from '../../assets/drogon.jpg';
import sword from '../../assets/sword.jpg';
import wine from '../../assets/wine.jfif';

import classes from './Home.css';

class Signin extends Component {
    render() {
        return(
            <div>

                <div className={classes.outer}>
                        <div className={classes.block1} >
                    <img src={nightKing} className={classes.back}/>
                        <Toolbar/>
                        <div className={classes.header}>
                                <h1>Winter is coming!</h1>
                                <p>Shop now.</p>
                        </div>                 
                    </div>
                </div>
               
               

                <div className={classes.block2}>

                    <div className={classes.left}>
                        <div className={classes.north}>
                            <p>Exclusively </p>
                            <p>from</p>
                            <p>north</p>
                            <p>of</p>
                            <p>the</p>
                            <p>Wall.</p>
                        </div>

                    </div>
                        
                    <div className={classes.right}>
                        <p className={classes.buy}>Buy now!</p>
                    </div>
    
                </div>

                <div className={classes.block3}>

                    <div className={classes.card1}>
                        <div className={classes.house}>
                            <p className={classes.name}>House Targariyan</p>
                        </div>                       
                    </div>

                    <div className={classes.card2}>
                        <div className={classes.house}>
                            <p className={classes.name}>House Stark</p>
                        </div>                       
                    </div>

                    <div className={classes.card3}>
                        <div className={classes.house}>
                            <p className={classes.name}>House Lannister</p>
                        </div>                       
                    </div>

                </div>

                <div className={classes.block4}>
                    <h1 className={classes.sale}>Now On Sale</h1>

                    <div className={classes.items}>
                        <div className={classes.item1}>
                            <img src={sword} className={classes.sword}/>
                        </div>
                    </div>
                </div>

                

            </div>
            
        )
    }
}

export default Signin;