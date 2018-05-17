import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = { width: 0, height: 0 }
 
  componentWillMount(){
    
    this.setState(
      {
        width: window.innerWidth, 
        height: window.innerHeight,
      }
    ) 

    this.firstRandomPosition()
  }


  firstRandomPosition = () =>{
    const frameWidth = parseInt( window.innerWidth / 20)
    const frameHeight = parseInt( window.innerHeight / 20)
    const x = this.getRandomIntInclusive(1, frameWidth) - 1
    const y = this.getRandomIntInclusive(1, frameHeight) - 1
    this.setState({ 
      position_x : x,
      position_y: y
    });
  }

  goToRight = () => {

    const { timeout } = this.state;
    clearTimeout(timeout);
    
    this.setState((prevState, props) => {
      return {
        position_x: prevState.position_x + 1,
      };
    });

    this.setState({
      timeout:  setTimeout( () => { this.goToRight() }, 100 )
    })
  }

  goToLeft = () => {

    const { timeout } = this.state;
    clearTimeout(timeout);

    this.setState((prevState, props) => {
      return {position_x: prevState.position_x - 1};
    });

    this.setState({
      timeout:  setTimeout( () => { this.goToLeft() }, 100 )
    })


  }

  goToUp = () => {

    const { timeout } = this.state;
    clearTimeout(timeout);

    this.setState((prevState, props) => {
      return {position_y: prevState.position_y - 1};
    });

    this.setState({
      timeout:  setTimeout( () => { this.goToUp() }, 100 )
    })
  }


  goToDown = () => {

    const { timeout } = this.state;
    clearTimeout(timeout);

    this.setState((prevState, props) => {
      return {position_y: prevState.position_y + 1};
    });

    this.setState({
      timeout:  setTimeout( () => { this.goToDown() }, 100 )
    })
  }

  stop = () =>{
    const { timeout } = this.state;
    clearTimeout(timeout);
  }


  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  render() {
    const frameWidth = parseInt(this.state.width / 20)
    const frameHeight = parseInt(this.state.height / 20)
    return (
      <div> 
        {[...Array(frameHeight)].map((x, i) =>
          <ul className="flex-container nowrap" key={i}>
            {[...Array(frameWidth)].map((_x, _i) =>
              <li key={_i} className={i === this.state.position_y && _i === this.state.position_x? 'flex-item-colored': 'flex-item'}></li>
            )}
          </ul>
        )}
        <div>
          <button onClick={() => this.goToUp()}>pra cima</button>
          <button onClick={() => this.goToDown()}>pra baixo</button>
          <button onClick={() => this.goToRight()}>pra direita</button>
          <button onClick={() => this.goToLeft()}>pra esquerda</button>
          <button onClick={() => this.stop()}>parar</button>
        </div>
      </div>
    );
  }
}

export default App;
