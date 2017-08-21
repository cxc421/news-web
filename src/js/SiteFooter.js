import React from 'react';
import Nav from './Nav';
import Card from './Card';

const defaultContent = ['Quote board',
					 					 'Best of 2013',
					 					 "Showbiz tonight",
					 					 "Fall entertainment 2013",
					 					 "Photo gallery",
					 					 "Music",
					 					 "Let's talk tv"];

const FooterBlock = ({title, content}) => {
	return (
		<div>
			<h3 className="block-title">{title}</h3>
			<Nav type="ul"
					 content={content} />			
		</div>
	);
};

FooterBlock.defaultProps = {
	content: defaultContent
};

const SiteFooter = (props) => {
	return (
		<footer className="site-footer dark-bg sm-hidden">
			<div className="container site-footer-inner">						
				<div className="row">
					<div className="col-sm-6 col-md-3">
						<FooterBlock title="Regions" />
					</div>
					<div className="col-sm-6 col-md-3">
						<FooterBlock title="Money" />
					</div>
					<div className="col-sm-6 col-md-3">
						<FooterBlock title="Tech" />
					</div>
					<div className="col-sm-6 col-md-3">
						<FooterBlock title="Sport" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default SiteFooter;

