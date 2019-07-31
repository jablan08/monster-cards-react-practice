	import React, { Component } from 'react';
	import CardList from "./components/Card-list/Card-list"
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
			<input type="search" placeholder="search monsters"/>
			<CardList monsters={monsters}/>
		</>
		);
	}
	}
	
	export default App;