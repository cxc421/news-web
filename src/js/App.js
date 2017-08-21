import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Card';
import SiteHeader from './SiteHeader';
import SiteMain from './SiteMain';
import SiteSecondary from './SiteSecondary';
import SiteFooter from './SiteFooter';
//import Nav from './Nav';

class App extends Component {
  render() {
    return (
    	<div>    		    	
				<SiteHeader />
				<SiteMain />
			  <SiteSecondary />
			  <SiteFooter />
			</div>
    );
  }
}

export default App;
