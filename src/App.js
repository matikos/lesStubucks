import React, { Component } from 'react';
import logo from './img/logo.png';
import background from './img/StubucksHero.jpg';
import './App.css';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import CoffeeForm from './coffeeForm';
import LogForm from './logForm';

class App extends Component {
  render() {
      let textStyle1 = {
        position: 'absolute', 
        top: '40%', 
        left: '5%'
      };
      let textStyle2 = {
        position: 'absolute', 
        top: '55%', 
        left: '5%'
      };
      let textStyle3 = {
        position: 'absolute', 
        top: '67%', 
        left: '5%'
      };
      let colorW = {
        color:'rgb(49, 113, 106)'
      };
    return (
      <div className="App">
        <div className='grid-container'>
        <div className='banner'></div>
        <img src={logo} className="app-logo" alt="logo" />
        <div className='gps'></div>
        <div className='menu'>   
          <nav className="menu-nav">
              <div className="blank">
                <a href=" #" className="blank"> </a>
              </div>
              <div className="coffee">
                <a href=" #" className="coffeePage">Coffee</a>
              </div>
              <div className="tea">
                <a href=" #" className="teaPage">Tea</a>
              </div>
              <div className="menu-item">
                <a href=" #" className="menu-itemPage">Menu</a>
              </div>
              <div className="rewards">
                <a href=" #" className="rewardsPage">Rewards</a>
              </div>
              <div className="join">
                <a href=" #" className="joinPage">Want to join our team?</a>
              </div>
              <div className="locations">
                <a href=" #" className="locationsPage">Locations</a>
              </div>
              <div className="specials">
                <a href=" #" className="specialsPage">Specials</a>
              </div>
            </nav>
        </div>
          
          <div className='container1'>
            <img src={background} className= "app-background" alt="background" />
            <h1 style={textStyle1}><span style={colorW}>Love</span> your Stu</h1>
            <h3 style={textStyle2}>Look at our range and choose the Stu that suits you.</h3>
            <button style={textStyle3}>Choose your coffee</button>  
          </div>
        </div>
        <Container2 />
        <Container3 />
        <CoffeeForm/>
        <LogForm/>
        <Container4 />
      </div>

    );
  }
}

export default App;
