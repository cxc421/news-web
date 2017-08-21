import React, { Component } from 'react';
import Nav from './Nav';
import Card from './Card';

//import Nav from './Nav';
import img_1 from '../img/demo/1.jpeg';
import img_2 from '../img/demo/2.jpeg';
import img_3 from '../img/demo/3.jpeg';
import img_4 from '../img/demo/4.jpeg';
import img_5 from '../img/demo/5.jpeg';
import img_6 from '../img/demo/6.jpeg';
import img_7 from '../img/demo/7.jpeg';
import img_8 from '../img/demo/8.jpeg';
import img_9 from '../img/demo/9.jpeg';

class App extends Component {
  render() {
    return (
    	<div>    		    	
				<header className="site-header dark-bg">
					<div className="container site-header-inner">
						
						<div className="site-logo">coding web design</div>
					
						{/* <a className="pull-right site-header-toggle" href="#">&#9776;</a> */}
											
						<Nav bsClass="site-menu pull-right"
								 type="nav"
								 content={['Money', 'Entertainment', 'Tech', 'Sport', 'Style', 'Video']} />
					</div>
				</header>
				
				<div className="site-main">
					<div className="container">

						<section className="block block-main">
							<div className="row">
								<div className="col-lg-8">
									{/* 藍色：頭條新聞 */}
									<div className="news-feature">
										<h1 className="title">
											Design thinking for healthcare
										</h1>
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
													<h4 className="title">
														What Makes Great Product Design?
													</h4>
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
												<h4 className="title">
													Should the government increase environmental regulations to prevent global warming?
												</h4>																	

												<ul className="nav m-y-15">
													<li>
														<input type="checkbox" />
														Yes
													</li>
									        <li>
									        	<input type="checkbox" />
														No
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
			  
			  {/* 第三段 */}
				<div className="site-secondary">
					<div className="container">

						<section className="block block-categories">
							<div className="row">
								{/* 目錄 1 */}
								<div className="col-lg-4 col-md-6">
									<h3 className="block-title">Money</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_4} alt="" />
										</div>
											<Nav type="ul"
													 content={['Bringing Nature Back in the Heart of London',
													 					 'Obama Jokes About The Last Time He Was This High',
													 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
													 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
									</div>
								</div>

								{/* 目錄 2 */}
								<div className="col-lg-4 col-md-6">
									<h3 className="block-title">Entertainment</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_5} alt="" />
										</div>
										<Nav type="ul"
												 content={['Bringing Nature Back in the Heart of London',
												 					 'Obama Jokes About The Last Time He Was This High',
												 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
												 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
									</div>
								</div>

								{/* 目錄 3 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Tech</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_6} alt="" />
										</div>
										<Nav type="ul"
												 content={['Bringing Nature Back in the Heart of London',
												 					 'Obama Jokes About The Last Time He Was This High',
												 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
												 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
									</div>
								</div>

								{/* 目錄 4 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Sport</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_7} alt="" />
										</div>
										<Nav type="ul"
												 content={['Bringing Nature Back in the Heart of London',
												 					 'Obama Jokes About The Last Time He Was This High',
												 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
												 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
									</div>
								</div>

								{/* 目錄 5 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Style</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_8} alt="" />
										</div>
										<Nav type="ul"
												 content={['Bringing Nature Back in the Heart of London',
												 					 'Obama Jokes About The Last Time He Was This High',
												 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
												 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
									</div>
								</div>

								{/* 目錄 6 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Video</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_9} alt="" />
										</div>
										<Nav type="ul"
												 content={['Bringing Nature Back in the Heart of London',
												 					 'Obama Jokes About The Last Time He Was This High',
												 					 "Kenya's Ivory Burn Sends Clear, Striking Message",
												 					 "From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy"]} />
									</div>
								</div>
							</div>
						</section>

					</div>
				</div>
			  
			  {/* 頁尾 */}
				<footer className="site-footer dark-bg sm-hidden">
					<div className="container site-footer-inner">
						
						<div className="row">
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Regions</h3>
								<Nav type="ul"
										 content={['Quote board',
										 					 'Best of 2013',
										 					 "Showbiz tonight",
										 					 "Fall entertainment 2013",
										 					 "Photo gallery",
										 					 "Music",
										 					 "Let's talk tv"]} />
							</div>
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Money</h3>
								<Nav type="ul"
										 content={['Quote board',
										 					 'Best of 2013',
										 					 "Showbiz tonight",
										 					 "Fall entertainment 2013",
										 					 "Photo gallery",
										 					 "Music",
										 					 "Let's talk tv"]} />
							</div>
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Tech</h3>
								<Nav type="ul"
										 content={['Quote board',
										 					 'Best of 2013',
										 					 "Showbiz tonight",
										 					 "Fall entertainment 2013",
										 					 "Photo gallery",
										 					 "Music",
										 					 "Let's talk tv"]} />
							</div>
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Sport</h3>
								<Nav type="ul"
										 content={['Quote board',
										 					 'Best of 2013',
										 					 "Showbiz tonight",
										 					 "Fall entertainment 2013",
										 					 "Photo gallery",
										 					 "Music",
										 					 "Let's talk tv"]} />
							</div>
						</div>

					</div>
				</footer>
			</div>
    );
  }
}

export default App;
