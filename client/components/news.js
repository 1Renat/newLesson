import React, {Component, PropTypes} from 'react';
import Article from "./article.js"

export default class News extends Component {
	constructor(props){
		super(props);
	}
	render() {
		let newsTemplate;
		console.log(this.props.news);
		if(this.props.news.length){
			 newsTemplate = this.props.news.map((item, i) => {
				return(
						<div key = {i}>
							<Article data = {item} />
						</div>
					)
				})
			}else{	
				newsTemplate = <p> нету выпаываы </p>
			}

		return(
			<div className = "news">
				{
					newsTemplate
				}
			</div>

		)
	}
} 
News.propTypes = {
	news: PropTypes.arrayOf(PropTypes.object).isRequired
}
