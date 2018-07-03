import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Body from './Body.js'
import SideBar from './SideBar.js'
import BottomBar from './BottomBar.js'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header />
         <main className="expanded row">
		   <Body /> 
		   <SideBar />
		   <BottomBar />
        </main>
		<Footer />
      </div>
    );
  }
}

export default App;
