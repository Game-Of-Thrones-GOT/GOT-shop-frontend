import React, {Component} from 'react';

import classes from './slideShow.css';

import drogon from '../../assets/drogon.jpg'
import dragonGlass from '../../assets/dragonGlass.jpeg'
import sword from '../../assets/sword.jpg'
import wine from '../../assets/wine.jfif'
import armour from '../../assets/armour.jpg'

class Signin extends Component {

    state={
        i:0,j:1,k:2
    }

    prevHandler = () => {
        if(this.state.i<1){
            this.setState({i:4})
        }else{
            this.setState({i:this.state.i-1})
        }

        if(this.state.j<1){
            this.setState({j:4})
        }else{
            this.setState({j:this.state.j-1})
        }

        if(this.state.k<1){
            this.setState({k:4})
        }else{
            this.setState({k:this.state.k-1})
        }
    }

    nextHandler = () => {
        if(this.state.i>3){
            this.setState({i:0})
        }else{
            this.setState({i:this.state.i+1})
        }

        if(this.state.j>3){
            this.setState({j:0})
        }else{
            this.setState({j:this.state.j+1})
        }

        if(this.state.k>3){
            this.setState({k:0})
        }else{
            this.setState({k:this.state.k+1})
        }
    }

    render() {

        const show = (
            [
                <div className={classes.slide}>
                    <img src={sword} className={classes.images}/>
                    <h4 className={classes.product}>Valeriyan Sword</h4>
                    <h6 className={classes.cancel}>$15000</h6>
                    <h5 className={classes.product}>$10000</h5>
                </div>,

                <div className={classes.slide}>
                    <img src={drogon} className={classes.images}/>
                    <h4 className={classes.product}>Drogon</h4>
                    <h6 className={classes.cancel}>$120000</h6>
                    <h5 className={classes.product}>$99999</h5>
                </div>,

                <div className={classes.slide}>
                    <img src={wine} className={classes.images}/>
                    <h4 className={classes.product}>Dornish Wine</h4>
                    <h6 className={classes.cancel}>$650</h6>
                    <h5 className={classes.product}>$500/l</h5>
                </div>,

                <div className={classes.slide}>
                    <img src={dragonGlass} className={classes.images}/>
                    <h4 className={classes.product}>Dragon Glass</h4>
                    <h6 className={classes.cancel}>$500</h6>
                    <h4 className={classes.product}>$249</h4>
                </div>,

                <div className={classes.slide}>
                    <img src={armour} className={classes.images}/>
                    <h4 className={classes.product}>Knight Armor</h4>
                    <h6 className={classes.cancel}>$27000</h6>
                    <h4 className={classes.product}>$14999</h4>
                </div>,
            ]
        )



        return(
            <div className={classes.container}>

                <div className={classes.center}>
                    <a className={classes.prev} onClick={this.prevHandler}> &#10094; </a> 
                </div>

                <div className={classes.center}>
                    <div className={classes.sides}>
                        {show[this.state.i]}
                    </div> 
                </div>
                
                <div className={classes.center}>
                <div className={classes.main}>
                    {show[this.state.j]}
                </div> 
                </div>

                <div className={classes.center}>
                    <div className={classes.sides}>
                        {show[this.state.k]}
                    </div>
                </div>
                
                

                <div className={classes.center}>
                    <div className={classes.center}>
                        <a className={classes.next} onClick={this.nextHandler}> &#10095; </a>
                    </div>
                </div>
               
                

            </div>
            
        )
    }
}

export default Signin;