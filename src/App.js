import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import ListBeers from './component/ListBeers'
import './App.css';


class App extends Component {
  
  constructor(){
    super()

    this.state = {
      arrayOfBeer : []
    }
    
  }

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
        const arrayOfBeer = res.data
        this.setState({arrayOfBeer})
      })
  }


  render(){
    return (
      <div className="App">
          <ListBeers beers={this.state.arrayOfBeer}/>
      </div>
    );

  }
}

export default App;
