import React from 'react';
import classNames from 'classnames';

const Nav = ({type, content, children, bsClass}) => {
	if (type === 'nav') {
		return (
			<nav className={classNames('nav', bsClass)}>
				{
					content.map((val, idx)=>{
						return <a href="#" className="nav-link" key={idx}>{val}</a>;
					})
				}
			</nav>			
		);
	}
	else {
		return (
			<ul className={classNames('nav', bsClass)}>
				{
					content.map((val, idx)=>{
						return <li key={idx} ><a href="#" className="nav-link">{val}</a></li>;
					})
				}
			</ul>			
		);
	}
};

Nav.defaultProps = {
	type: 'nav',
	content: [],
	bsClass: null	
};

export default Nav;