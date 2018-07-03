import React, {Component} from 'react';

class Comment extends Component{
	render(){
		return(
			<li>{this.props.comment}</li>
		)
	}
}

class CommentForm extends Component{
	constructor(){
		super()
		this.state = {
			comments: [],
			value: '',
		}
		
	}
	
	handleSubmit = (e) =>{
		e.preventDefault()
		console.log(this.state.value)
		const comments = [...this.state.comments]
		comments.push(this.state.value)
		
		this.setState({
			comments: comments,
			value: '',
		})		
	}

	handleChange = (event) => {
    	this.setState({value: event.target.value});
    }

    render(){
        return(
			<div>
            	<form onSubmit={this.handleSubmit}>
 					<label>
    					<input type="text" name="comment" value={this.state.value} onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Submit"/>
				</form>
				<ul>
					{this.state.comments.map(currentComment =>  <Comment comment={currentComment}/>)}
				</ul>
			</div>
        )
    }
}

export default CommentForm
