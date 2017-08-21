import React, { Component } from 'react';
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
											
						<nav className="nav site-menu pull-right">
							<a href="#" className="nav-link">Money</a>
							<a href="#" className="nav-link">Entertainment</a>
							<a href="#" className="nav-link active">Tech</a>
							<a href="#" className="nav-link">Sport</a>
							<a href="#" className="nav-link">Style</a>
							<a href="#" className="nav-link">Video</a>
						</nav>

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
												<div className="card">
													<div className="card-img">
														<img className="img-fluid" src={img_3} alt="" />
													</div>
													<ul className="nav">
														<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
										        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
										        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
										        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="ads m-b-30">
												<img className="img-fluid" src={img_2} alt="" />
											</div>
											<div className="card">
												<div className="card-content">
													<h4 className="title">
														What Makes Great Product Design?
													</h4>
													<p>Global warming, or climate change, is an increase in the earth's atmospheric temperature since the late nineteenth century.  </p>
												</div>
											</div>
										</div>
									</div>

								</div>

								<div className="col-lg-4 md-hidden">
									{/* 綠色：即時新聞或可替換內容。 */}
									<div className="widget">
										<h3 className="block-title">The World Post</h3>
										<div className="card">
											<ul className="nav">
												<li><a href="#" className="nav-link">Eagles Feed Cat To Chicks On Live Cam, Prove Nature Is Horrific</a></li>
								        <li><a href="#" className="nav-link">The Myth Surrounding Baby Songbirds</a></li>
								        <li><a href="#" className="nav-link">Hey, Environmentalists - Stop Being Such Dicks</a></li>
								        <li><a href="#" className="nav-link">n Memory of the Woman Who Helped Bears in Distress</a></li>
								        <li><a href="#" className="nav-link">The Climate Post: Study Says Half a Degree Matters</a></li>
											</ul>
										</div>
									</div>
									<div className="widget">
										<h3 className="block-title">News and buzz</h3>
										<div className="card">
											<ul className="nav">
												<li><a href="#" className="nav-link">Rosberg speeds to win in front of Putin</a></li>
								        <li><a href="#" className="nav-link">Circus elephants perform last show</a></li>
								        <li><a href="#" className="nav-link">Spoilers are coming! Jon Snow is...</a></li>
								        <li><a href="#" className="nav-link">ISIS claims Hindu tailor hack murder</a></li>
								        <li><a href="#" className="nav-link">The 5000-1 Premier League champions?</a></li>
								        <li><a href="#" className="nav-link">Clashes in Germany, hundreds arrested</a></li>
											</ul>
										</div>
									</div>
									<div className="widget">
										<div className="card">
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
										</div>
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
										<ul className="nav">
											<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
							        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
							        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
							        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
										</ul>
									</div>
								</div>

								{/* 目錄 2 */}
								<div className="col-lg-4 col-md-6">
									<h3 className="block-title">Entertainment</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_5} alt="" />
										</div>
										<ul className="nav">
											<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
							        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
							        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
							        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
										</ul>
									</div>
								</div>

								{/* 目錄 3 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Tech</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_6} alt="" />
										</div>
										<ul className="nav">
											<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
							        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
							        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
							        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
										</ul>
									</div>
								</div>

								{/* 目錄 4 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Sport</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_7} alt="" />
										</div>
										<ul className="nav">
											<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
							        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
							        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
							        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
										</ul>
									</div>
								</div>

								{/* 目錄 5 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Style</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_8} alt="" />
										</div>
										<ul className="nav">
											<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
							        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
							        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
							        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
										</ul>
									</div>
								</div>

								{/* 目錄 6 */}
								<div className="col-lg-4 col-md-6 sm-hidden">
									<h3 className="block-title">Video</h3>
									<div className="card">
										<div className="card-img">
											<img className="img-fluid" src={img_9} alt="" />
										</div>
										<ul className="nav">
											<li><a href="#" className="nav-link">Bringing Nature Back in the Heart of London</a></li>
							        <li><a href="#" className="nav-link">Obama Jokes About The Last Time He Was This High </a></li>
							        <li><a href="#" className="nav-link">Kenya's Ivory Burn Sends Clear, Striking Message</a></li>
							        <li><a href="#" className="nav-link">From the Ivory Tower Kitchen: The Real Victims of the Farm-to-Fable Controversy</a></li>
										</ul>
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
								<ul className="nav">
									<li><a href="#" className="nav-link">Quote board</a></li>
					        <li><a href="#" className="nav-link">Best of 2013</a></li>
					        <li><a href="#" className="nav-link">Showbiz tonight</a></li>
					        <li><a href="#" className="nav-link">Fall entertainment 2013</a></li>
					        <li><a href="#" className="nav-link">Photo gallery</a></li>
					        <li><a href="#" className="nav-link">Music</a></li>
					        <li><a href="#" className="nav-link">Let's talk tv</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Money</h3>
								<ul className="nav">
									<li><a href="#" className="nav-link">Quote board</a></li>
					        <li><a href="#" className="nav-link">Best of 2013</a></li>
					        <li><a href="#" className="nav-link">Showbiz tonight</a></li>
					        <li><a href="#" className="nav-link">Fall entertainment 2013</a></li>
					        <li><a href="#" className="nav-link">Photo gallery</a></li>
					        <li><a href="#" className="nav-link">Music</a></li>
					        <li><a href="#" className="nav-link">Let's talk tv</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Tech</h3>
								<ul className="nav">
									<li><a href="#" className="nav-link">Quote board</a></li>
					        <li><a href="#" className="nav-link">Best of 2013</a></li>
					        <li><a href="#" className="nav-link">Showbiz tonight</a></li>
					        <li><a href="#" className="nav-link">Fall entertainment 2013</a></li>
					        <li><a href="#" className="nav-link">Photo gallery</a></li>
					        <li><a href="#" className="nav-link">Music</a></li>
					        <li><a href="#" className="nav-link">Let's talk tv</a></li>
								</ul>
							</div>
							<div className="col-sm-6 col-md-3">
								{/* 其他選單 */}
								<h3 className="block-title">Sport</h3>
								<ul className="nav">
									<li><a href="#" className="nav-link">Quote board</a></li>
					        <li><a href="#" className="nav-link">Best of 2013</a></li>
					        <li><a href="#" className="nav-link">Showbiz tonight</a></li>
					        <li><a href="#" className="nav-link">Fall entertainment 2013</a></li>
					        <li><a href="#" className="nav-link">Photo gallery</a></li>
					        <li><a href="#" className="nav-link">Music</a></li>
					        <li><a href="#" className="nav-link">Let's talk tv</a></li>
								</ul>
							</div>
						</div>

					</div>
				</footer>
			</div>
    );
  }
}

export default App;
