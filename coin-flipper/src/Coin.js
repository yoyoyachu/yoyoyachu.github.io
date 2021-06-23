import React,{Component } from 'react';
import './coin.css'
class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (  
            <div className="Coin">
                <img src={this.props.side} alt="img not found" />
            </div>
        );
    }
}
 
export default Coin;