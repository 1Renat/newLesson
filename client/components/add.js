import React, {Component} from 'react'
export default class Add extends Component{
	constructor(props){
		super(props);

		this.state = {
			areeeNotChecked: true,
			authorIsEmpty: true,
			textIsEmpty: true
		}
	}
	render(){
		return(
			

			<form className = "add cf">
			<input
				type = "text"
				className = "add_author"
				onChange = {this.onFieldChange.bind(this, 'authorIsEmpty')}
				placeholder = "Your Name"
				ref = 'author' />
			<textarea 
				className= 'add_text'
				onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
				placeholder = "news text"></textarea>
			<label className = "add_checkrule"
			<input
			
			</form>
			)
	}
}