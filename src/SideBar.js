import React, {Component} from 'react';
import AdImage from './AdImage.js'
import AdText from './AdText.js'

class SideBar extends Component{
    render(){
        return(
			<aside className="large-4 medium-12 columns">
            <div className="ad">
              <h3>The Last Hammer You'll Ever Need</h3>
				
			  <AdImage />

              <h4>Mining diamonds or crushing the skulls of your enemies, the SmashMaster 4000 does it all</h4>
				
			  <AdText />
            </div>

           </aside>
		)
	}
}

export default SideBar
