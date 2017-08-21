import React, {Component} from 'react';
import $ from 'jquery';
import Nav from './Nav';

class SiteHeader extends Component {
	constructor () {
		super(...arguments);
		this.toggleDownNav = this.toggleDownNav.bind(this);
	}
	toggleDownNav () {
		//console.log('click');
		const $target = $(this.refs.downNav);
		$target.slideToggle( "slow" );		
	}

	componentDidMount () {
		$(window).on('resize', ()=>{
			if (window.innerWidth > 993) {
				$(this.refs.downNav).hide();
			}
		});
	}
	componentWillUnmount () {
		$(window).off('resize');
	}
	render () {
		return (
			<header className="site-header dark-bg">
				<div className="container site-header-inner">
					
					<div className="site-logo">NEWS</div>					
					
					<a ref="downNavBtn" onClick={this.toggleDownNav} className="pull-right site-header-toggle" href="#">&#9776;</a>
					
					<Nav bsClass="site-menu pull-right"
							 type="nav"
							 content={['Money', 'Entertainment', 'Tech', 'Sport', 'Fashion', 'Movie']} />
					
				</div>
				<div ref="downNav" className="down-nav">
					<div><div className="container">Money</div></div>
					<div><div className="container">Entertainment</div></div>
					<div><div className="container">Tech</div></div>
					<div><div className="container">Sport</div></div>
					<div><div className="container">Fashion</div></div>
					<div><div className="container">Movie</div></div>
				</div>
			</header>		
		);
	}
}

/*


*/

export default SiteHeader;