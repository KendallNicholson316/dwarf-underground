import React, {Component} from 'react';
import CommentForm from './CommentForm.js'

class PassageLinks extends Component{
	constructor(){
		super()
		this.state ={
			click: false,
		}

	}

	handleComment = (e) =>{
		e.preventDefault();
		this.setState({click: !this.state.click,})
	}

    render(){
		if(this.state.click){
        return(
			<section>
			<div className="article-links">
              <a className="article-link" >
                <i className="fa fa-comments-o"></i>
                <span onClick={this.handleComment} className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>
			<CommentForm />
			</section>
        )
		}else{
			return(
				<div className="article-links">
              <a className="article-link" href="#">
                <i className="fa fa-comments-o"></i>
                <span onClick={this.handleComment} className="article-link-text">Comments</span>
              </a>
              <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
              </a>
            </div>

			)
		}
    }
}

export default PassageLinks
