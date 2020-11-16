import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './Home/Home'
import Monolith from './Albums/Monolith/Monolith'
import Contact from './Contact/Contact'
//Route declaration
const App =()=>{
	return(
		<div>

			<HashRouter>
				<Route path ="/" exact component ={Home}/>
				<Route path="/albums/monolith" exact component = {Monolith}/>
				<Route path="/contact" exact component={Contact}/>
			</HashRouter>
		</div>
	)
}

export default App

