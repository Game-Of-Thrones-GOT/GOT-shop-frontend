import React, {Component} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar.js'
<<<<<<< HEAD
import SlideShow from '../../components/slideShow/slideShow.js'

import nightKing from '../../assets/nightKing.jpg';
import drogon from '../../assets/drogon.jpg';
import sword from '../../assets/sword.jpg';
import wine from '../../assets/wine.jfif';
=======
>>>>>>> f66adb7c21c8768d3af7246a6d93ac34da9c1395

import classes from './Home.css';

class Signin extends Component {
    render() {
        return(
            <div>
<<<<<<< HEAD

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

                    <SlideShow />

                </div>

                <div className={classes.block5}>
                    <p className={classes.footer}>Lorem Ipsum is simply dummy text of the printing
                         and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a 
                          type specimen book. It has survived not only five centuries, but also the
                           leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets
                             containing Lorem Ipsum passages, and more recently with desktop publishing
                              software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                
=======
               
               <div className={classes.block1} >
                   <Toolbar/>
                   <div className={classes.header}>
                        <h1>Winter is coming!</h1>
                        <p>Shop now.</p>
                   </div>                 
               </div>

               <h1>hello</h1>
>>>>>>> f66adb7c21c8768d3af7246a6d93ac34da9c1395

            </div>
            
        )
    }
}

export default Signin;