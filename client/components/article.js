import React, {Component, PropTypes} from 'react';

export default class Article extends Component{
	constructor(props){
		super(props);
		this.state = {
			visible: false,
			rating: 0,
			oneMoreOption: 'huinya'
		}
		this.readMoreClick = this.readMoreClick.bind(this);


	}
	readMoreClick(e){
		this.setState({
			visible: true,
			rating: 2342342,
			oneMoreOption: "ky ky epta"
		})
	}
	render(){
		let author = this.props.data.author,
			text = this.props.data.text,
			bigText = this.props.data.bigText,
			visible = this.state.visible;
		return(
			<div className="article">
				<p className= "author">{author}:</p>
				<p className="text">{text}</p>
				<a href = "#"
					onClick={this.readMoreClick}
					className = {"news_readmore " + (visible ? 'none' : '')}>
					ReadMore: 
				</a>
				<p className = {"news_big-text " + (visible ? '' : 'none')}>{bigText}</p>
			</div>
			)
	}
}

Article.propTypes = {
	data: PropTypes.shape({
		author: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired
	})
}