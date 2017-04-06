import React, {Component} from 'react';
import News from "./news.js"
import Add from "./add.js"

const newsList = [
	{
		author: 'Ilgiz',
		text: 'qqqq',
		bigText: 'sdfsdfsdfs'
	},
	{
		author: 'Ilgiz',
		text: 'qqqq',
		bigText: 'sdfsdfsdfs'
	},
	{
		author: 'Ilgiz',
		text: 'qqqq',
		bigText: 'sdfsdfsdfs'
	}
]
export default class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			news: newsList
		}
	}

	render() {
		console.log('fq');
		return(
			<div className='app'>
			<Add />
			<h3>News</h3>
				<News news={this.state.news} />
			</div>
			)
	}
}