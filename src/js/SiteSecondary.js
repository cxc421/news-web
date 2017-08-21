import React from 'react';
import Nav from './Nav';
import Card from './Card';

import img_4 from '../img/img_4.jpg';
import img_5 from '../img/img_5_1.jpg';
import img_6 from '../img/img_6.jpg';
import img_7 from '../img/img_7.jpg';
import img_8 from '../img/img_8.jpg';
import img_9 from '../img/img_9.jpg';

const defaultContent = ['Bringing Nature Back in the Heart of London',
										 					 'Obama Jokes About The Last Time He Was This High',
										 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
										 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"];

const Block = ({title, img, content}) => {
	return (
		<div>
			<h3 className="block-title">{title}</h3>
			<Card img={img}>
				<Nav type="ul"
						 content={content} />									
			</Card>			
		</div>		
	);
};

Block.defaultProps = {
	title: '',
	img: null,
	content: defaultContent
};

const SiteSecondary = (props) => {
	return (
		<div className="site-secondary">
			<div className="container">
				<section className="block block-categories">
					<div className="row">
						{/* 目錄 1 */}
						<div className="col-lg-4 col-md-6">
							<Block title="Money" img={img_4} />
						</div>

						{/* 目錄 2 */}
						<div className="col-lg-4 col-md-6">
							<Block title="Entertainment" img={img_5} />
						</div>

						{/* 目錄 3 */}
						<div className="col-lg-4 col-md-6 sm-hidden">
							<Block title="Tech" img={img_6} />
						</div>

						{/* 目錄 4 */}
						<div className="col-lg-4 col-md-6 sm-hidden">
							<Block title="Sport" img={img_7} />
						</div>

						{/* 目錄 5 */}
						<div className="col-lg-4 col-md-6 sm-hidden">
							<Block title="Fashion" img={img_8} />
						</div>

						{/* 目錄 6 */}
						<div className="col-lg-4 col-md-6 sm-hidden">
							<Block title="Movie" img={img_9} />
						</div>
					</div>
				</section>
			</div>
		</div>		
	);
};

export default SiteSecondary;

