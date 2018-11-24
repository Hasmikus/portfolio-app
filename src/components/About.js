import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class About extends Component {
    render() {
        return (
			<section id="about-us">
				<div className="container">
					<div className="theme-title">
						<h2>ABOUT OUR Company</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
					</div>

					<Row>
						<Col lg="3" md="3" sm="6">
							<div className="single-about-content">
								<div className="icon round-border tran3s">
									<i className="fa fa-pencil-square-o" aria-hidden="true"></i>								</div>
								<h5><a href="#" className="tran3s">Web Development</a></h5>
								<p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
								<a href="#" className="more tran3s hvr-bounce-to-right">More Details</a>
							</div>
						</Col>

						<Col lg="3" md="3" sm="6">
							<div className="single-about-content">
								<div className="icon round-border tran3s">
									<i className="fa fa-camera" aria-hidden="true"></i>
								</div>
								<h5><a href="#" className="tran3s">PHOTOGRAPHY</a></h5>
								<p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
								<a href="#" className="more tran3s hvr-bounce-to-right">More Details</a>
							</div>
						</Col>

						<Col lg="3" md="3" sm="6">
							<div className="single-about-content">
								<div className="icon round-border tran3s">
									<i className="fa fa-life-ring" aria-hidden="true"></i>
								</div>
								<h5><a href="#" className="tran3s">Digital Media</a></h5>
								<p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
								<a href="#" className="more tran3s hvr-bounce-to-right">More Details</a>
							</div>
						</Col>

						<Col lg="3" md="3" sm="6">
							<div className="single-about-content">
								<div className="icon round-border tran3s">
									<i className="fa fa-line-chart" aria-hidden="true"></i>
								</div>
								<h5><a href="#" className="tran3s">Online Marketing</a></h5>
								<p>Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
								<a href="#" className="more tran3s hvr-bounce-to-right">More Details</a>
							</div>
						</Col>
					</Row>
				</div>
			</section>
        );
    }
};

export { About };
