import React, { Component } from 'react';

class App extends Component {
  state = { 
    monsters: []
  }

  componentDidMount() {
    this.getMonsters().then(data=>{
      this.setState({
        monsters: data
      })
    })
  }
  getMonsters = async () => {
    try {
      const monsterCall = await fetch("https://jsonplaceholder.typicode.com/users")
      const monsterJson = await monsterCall.json()
      return monsterJson
      
    } catch (error) {
      
    }
  }
   
  render() {
    const { monsters } = this.state
    console.log(monsters) 
    return ( 
      <>
      </>
     );
  }
}
 
export default App;