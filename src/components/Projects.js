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
	        				<li className="filter active tran3s" data-filter="all">All</li>
							<li className="filter tran3s" data-filter=".web">Web Design</li>
							<li className="filter tran3s" data-filter=".photo">Photography</li>
							<li className="filter tran3s" data-filter=".webd">Web Development</li>
							<li className="filter tran3s" data-filter=".om">Online Marketing</li>
							<li className="filter tran3s" data-filter=".dmedia">Digital Media</li>
							<li className="filter tran3s" data-filter=".support">Support</li>
	        			</ul>
					</div>

					<div className="project-gallery clear-fix">
						<div className="mix grid-item photo om dmedia">
							<div className="single-img">
								<img src="assets/images/project/1.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Sweet Photo</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix grid-item web webd dmedia support">
							<div className="single-img">
								<img src="assets/images/project/2.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Sweet Photo</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix grid-item photo webd support">
							<div className="single-img">
								<img src="assets/images/project/3.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Sweet Photo</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix grid-item web om">
							<div className="single-img">
								<img src="assets/images/project/4.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Sweet Photo</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix grid-item photo webd dmedia om">
							<div className="single-img">
								<img src="assets/images/project/5.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Sweet Photo</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
										</ul></div></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mix grid-item web webd dmedia om">
							<div className="single-img">
								<img src="assets/images/project/6.jpg" alt="Image" />
								<div className="opacity">
									<div className="border-shape"><div><div>
										<h6><a href="#">Sweet Photo</a></h6>
										<ul>
											<li>Business /</li>
											<li>Service /</li>
											<li>Product /</li>
											<li>Template</li>
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