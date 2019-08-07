	import React, { Component } from 'react';
	import SearchBox from "./components/SearchBox/SearchBox"
	import CardList from "./components/Card-list/Card-list"
	import "./App.css"
	class App extends Component {
	state = { 
		monsters: [],
		search: ""
	}

	componentDidMount() {
		this.getMonsters().then(data=>{
		this.setState({
			monsters: data
		})
		})
	}
	handleChange = e => 
		this.setState({
			[e.target.name]: e.target.value
		})
	getMonsters = async () => {
		try {
			const monsterCall = await fetch("https://jsonplaceholder.typicode.com/users")
			const monsterJson = await monsterCall.json()
			return monsterJson
		
		} catch (error) {
			
		}
	}
	
	render() {
		const { monsters, search } = this.state
		const filtered = monsters.filter(monster => 
			monster.name.toLowerCase().includes(search.toLowerCase())
		)
		return ( 
		<div className="App">
			<SearchBox placeholder="search monsters"
			handleChange={this.handleChange}/>
			<CardList monsters={filtered}/>
		</div>
		);
	}
	}
	
	export default App;