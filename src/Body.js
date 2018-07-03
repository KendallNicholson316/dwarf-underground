import React, {Component} from 'react';
import MainPassage from './MainPassage.js'
import Avatar from './Avatar.js'
import PassageLinks from './PassageLinks.js'


class Body extends Component{
    render(){
        return(
		  <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Avatar />
			<MainPassage />
			<PassageLinks />

          </div>
		)
	}
}

export default Body
