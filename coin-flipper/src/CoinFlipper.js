import React,{Component} from 'react';
import Coin from './Coin';
import './coinFlipper.css';

class CoinFlipper extends Component {
    static defaultProps = {
        //array of images of coins
        sidesArr : ['https://raw.githubusercontent.com/JS-Beginners/coin-toss-game-2/master/heads.png','https://github.com/JS-Beginners/coin-toss-game-2/blob/master/tails.png?raw=true']
    }
    //in state obj, player & computer refers to the side of coin assigning to them.
    //playerScore & computerScore are counters whick keeps tracking of score whenever you flip the coin.
    //announceMsg will display a msg of winning player
    //by default, sideImg is set to a gif when no props is sent to Coin component(before flipping coin)
    constructor(props) {
        super(props);
        this.state = {  
            sideImg: 'https://media0.giphy.com/media/f9qwUQW56qC7BeCfCM/giphy.gif?cid=ecf05e47n93aitwrcqab3teqhjpbyunp2qm2jc8an08ixi4j&rid=giphy.gif&ct=g',
            player: null,
            computer: null,
            playerScore: 0,
            computerScore: 0,
            announceMsg: '',
            winMsg: ''
        }
    }
    
    //when player clicks on Heads btn, this fn assigns heads to player & tails to computer.
    //also winMsg is set to empty string, just to make sure no msg is displayed after the game is over.
    playerHeads = () =>{
        this.setState({player: 0,computer:1,winMsg:'',announceMsg:''})
    }

    playerTails = () =>{
        this.setState({player: 1,computer:0,winMsg:'',announceMsg:''})
    }

    sides = ()=>{
        //idx generates random num from 0 to 1 and oneSide will give element from this.props.sideArr...which provides img link
        const idx = Math.floor(Math.random()*2);
        const oneSide = this.props.sidesArr[idx];
        //player & computer is set to null ,so no confusion happens before and after flipping coin
        this.setState({sideImg: oneSide,player:null,computer:null});

        //takes the random num we've generated and compare it with player&computer's side(player,computer) to add score in particular one if matches
        if(this.state.player === idx){
            this.setState({playerScore: this.state.playerScore+1,announceMsg:'Point goes to player'})
        }else if(this.state.computer === idx){
            this.setState({computerScore: this.state.computerScore+1,announceMsg:'Point goes to computer'})
        }

        //checks if anyone has score greater than 2 or not
        if(this.state.playerScore >= 2){
            this.setState({winMsg:'You won the game',playerScore:0,computerScore:0})
        }
        if(this.state.computerScore >= 2){
            this.setState({winMsg:'You lose',playerScore:0,computerScore:0})
        }
        if(this.state.playerScore >= 2 && this.state.computerScore >=2 ){
            this.setState({winMsg:"It's a tie",playerScore:0,computerScore:0})
        }
    }
    playAgain= ()=>{
        this.setState({sideImg: 'https://media0.giphy.com/media/f9qwUQW56qC7BeCfCM/giphy.gif?cid=ecf05e47n93aitwrcqab3teqhjpbyunp2qm2jc8an08ixi4j&rid=giphy.gif&ct=g',playerScore:0,computerScore:0,player:null,computer:null,announceMsg:'',winMsg:''})
    }
    render() { 
        //playerTitle,computerTitle are defined temporarily to display which side assigns to which
        let playerTitle,computerTitle
        if(this.state.player === 0){
            playerTitle = 'Heads';
        }else if(this.state.player === 1){
            playerTitle = 'Tails';
        }

        if(this.state.computer === 0){
            computerTitle = 'Heads';
        }else if(this.state.computer === 1){
            computerTitle = 'Tails';
        }

        return (
            <div className="container">
                <h1 className="text-center p-5">3 Points Coin Toss!</h1>
                <h1>{this.state.winMsg}</h1>
                <div className="card">
                    <Coin side={this.state.sideImg} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.announceMsg}</h5>
                        <p className="card-text"></p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="playerComputerLI list-group-item">
                            <ul className="playerUL">
                            Player:
                                <li>{this.state.playerScore}</li>
                                <li>{playerTitle}</li>
                            </ul>  
                            <ul className="playerUL">
                            Computer:
                                <li>{this.state.computerScore}</li>
                                <li>{computerTitle}</li>
                            </ul>                           
                        </li>
                    </ul>
                    <div className="card-body playerComputerLI">
                    <button onClick={this.playerHeads} className="card-link btn  btn-primary btn-lg" data-bs-toggle="button">Heads</button>
                    <button onClick={this.playerTails} className="card-link btn btn-success btn-lg" data-bs-toggle="button">Tails</button>
                    <button onClick={this.playAgain} className="card-link btn btn-danger btn-lg">Play Again</button>

                    </div>
                    
                    <div className="card-body d-grid gap-4">
                    <button onClick={this.sides} className="card-link btn btn-warning btn-lg">Flip Me!</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CoinFlipper;


//image credits: https://github.com/JS-Beginners/coin-toss-game-2