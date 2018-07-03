import React, {Component} from 'react';

class ClickBait extends React.Component {
	render() {
		return(
			<div className={this.props.bait.name}>
              <a href={this.props.bait.ref}>
                <img src={this.props.bait.img} alt={this.props.bait.imgNick} />
                <p>{this.props.bait.txt}</p>
              </a>
            </div>
		)
	}
}

class BottomBar extends Component{
	constructor(){
		super()
		this.state = {
			clickBaits:[
				{name: 'small-6 medium-3 columns other-article',
					ref: '#',
					img: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif', 
					imgNick: 'orc', 
					txt: 'Single Orcs in Indianapolis'},
				{name: 'small-6 medium-3 columns other-article',
					ref: '#', 
					img: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg', 
					imgNick: 'mountain',
					txt: 'You won\'t believe what\'s under this mountain'},
				{name: 'small-6 medium-3 columns other-article',
					ref: '#', 
					img: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg', 
					imgNick: 'gold',
					txt: 'Mine 20% more gold with One Weird Trick'},
				{name: 'small-6 medium-3 columns other-article',
					ref: '#', 
					img: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg', 
					imgNick: 'hobbit',
					txt: 'Surprise for Indiana Hobbits born before 1999'},
			],
						
		}
	
	}

    render(){
        return(

			<div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
			
			{this.state.clickBaits.map(currentBait =>  <ClickBait bait={currentBait}/>)}			
			
            </div>
        )
    }
}

export default BottomBar

