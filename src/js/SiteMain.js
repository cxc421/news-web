import React from 'react';
import Nav from './Nav';
import Card from './Card';

import img_1 from '../img/img_1.jpg';
import img_2 from '../img/p1.jpg';
import img_3 from '../img/demo/3.jpeg';

const SiteMain = (props) => {
	return (
		<div className="site-main">
			<div className="container">
				<section className="block block-main">
					<div className="row">
						<div className="col-lg-8">
							{/* 藍色：頭條新聞 */}
							<div className="news-feature">
								<h1 className="title">After Wimbledon win, we look at Roger Federer's 19 Grand Slam wins</h1>
								<img className="img-fluid" src={img_1} alt="" />
							</div>

							<h3 className="block-title">Spotlight</h3>
							{/* 黃色：重點新聞和廣告 */}
							<div className="row">
								<div className="col-sm-6">
									<div className="news-spotlight">
										<Card img={img_3}>
											<Nav type="ul"
													 content={['Bringing Nature Back in the Heart of London',
													 					 'Obama Jokes About The Last Time He Was This High',
													 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
													 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
										</Card>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="ads m-b-30">
										<img className="img-fluid" src={img_2} alt="" />
									</div>
									<Card >
										<div className="card-content">
											<h4 className="title">What Makes Great Product Design?</h4>
											<p>Global warming, or climate change, is an increase in the earth's atmospheric temperature since the late nineteenth century. </p>
										</div>												
									</Card>
								</div>
							</div>
						</div>

						<div className="col-lg-4 md-hidden">
							{/* 綠色：即時新聞或可替換內容。 */}
							<div className="widget">
								<h3 className="block-title">The World Post</h3>
								<Card>
									<Nav type="ul"
											 content={['Eagles Feed Cat To Chicks On Live Cam, Prove Nature Is Horrific',
											 					 'The Myth Surrounding Baby Songbirds',
											 					 "Hey, Environmentalists - Stop Being Such Dicks",
											 					 "n Memory of the Woman Who Helped Bears in Distress",
											 					 "The Climate Post: Study Says Half a Degree Matters"]} />																					
								</Card>
							</div>
							<div className="widget">
								<h3 className="block-title">News and buzz</h3>
								<Card>
									<Nav type="ul"
											 content={['Rosberg speeds to win in front of Putin',
											 					 'Circus elephants perform last show',
											 					 "Spoilers are coming! Jon Snow is...",
											 					 "ISIS claims Hindu tailor hack murder",
											 					 "The 5000-1 Premier League champions?",
											 					 "Clashes in Germany, hundreds arrested"]} />																				
								</Card>
							</div>
							<div className="widget">
								<Card>
									<div className="card-content">
										<h4 className="title">Should the government increase environmental regulations to prevent global warming?</h4>																	
										<ul className="nav m-y-15">
											<li>
												<input type="checkbox" />Yes
											</li>
							        <li>
							        	<input type="checkbox" />No
							        </li>
										</ul>
										<a href="" className="button button-blue">Learn more about Global Warming</a>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>		
	);
};


export default SiteMain;