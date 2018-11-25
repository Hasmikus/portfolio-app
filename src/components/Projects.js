import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
			<div id="project-section">
				<div className="container">
					<div className="theme-title">
						<h2>OUR AWESOME PROJECTS</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
					</div>

					<div className="project-menu">
						<ul>
	        				<li className="filter active tran3s">All</li>
							<li className="filter tran3s">Web Design</li>
							<li className="filter tran3s">Photography</li>
							<li className="filter tran3s">Web Development</li>
							<li className="filter tran3s">Online Marketing</li>
							<li className="filter tran3s">Digital Media</li>
							<li className="filter tran3s">Support</li>
	        			</ul>
					</div>

					<div className="project-gallery clear-fix">
						<div className="mix">
							<div className="single-img">
								<img src="/assets/images/project/1.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Project Details</a></h6>
										<ul>
											<li>Presentational web pages</li>
											<li>Bots /</li>
											<li>Admin Apps /</li>
											<li>Card Web Pages</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix">
							<div className="single-img">
								<img src="/assets/images/project/2.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Project Details</a></h6>
										<ul>
											<li>Presentational web pages</li>
											<li>Bots /</li>
											<li>Admin Apps /</li>
											<li>Card Web Pages</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix">
							<div className="single-img">
								<img src="/assets/images/project/3.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Project Details</a></h6>
										<ul>
											<li>Presentational web pages</li>
											<li>Bots /</li>
											<li>Admin Apps /</li>
											<li>Card Web Pages</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix">
							<div className="single-img">
								<img src="/assets/images/project/4.png" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Project Details</a></h6>
										<ul>
											<li>Presentational web pages</li>
											<li>Bots /</li>
											<li>Admin Apps /</li>
											<li>Card Web Pages</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="mix">
							<div className="single-img">
								<img src="/assets/images/project/5.png" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Project Details</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div> */}

						<div className="mix">
							<div className="single-img">
								<img src="/assets/images/project/6.png" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Project Details</a></h6>
										<ul>
											<li>Extensions /</li>
											<li>Presentational web pages</li>
											<li>Bots /</li>
											<li>Admin Apps /</li>
											<li>Card Web Pages</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
        );
    }
};

export { Projects };