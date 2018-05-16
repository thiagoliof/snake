import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = { width: 0, height: 0 }
  
  componentWillMount(){
    this.setState(
      {
        width: window.innerWidth, 
        height: window.innerHeight
      }
    ) 

  }

  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  render() {
    const frameWidth = parseInt(this.state.width / 20)
    const frameHeight = parseInt(this.state.height / 20)

    const random_x = this.getRandomIntInclusive(0, frameWidth)
    const random_y = this.getRandomIntInclusive(0, frameHeight)

    debugger

    return (
      <div>
        {[...Array(frameHeight)].map((x, i) =>
          <ul className="flex-container nowrap" key={i}>
            {[...Array(frameWidth)].map((_x, _i) =>
              <li className={i === random_y && _i === random_x? 'flex-item-colored': 'flex-item'} key={_i} ></li>
            )}
          </ul>
        )}
        
      </div>
    );
  }
}

export default App;
