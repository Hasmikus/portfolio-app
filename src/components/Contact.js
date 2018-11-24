import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';
import { ContactForm } from './ContactForm';

class Contact extends Component {
    render() {
        return (
			<div id="contact-section">
				<div className="container">
					<Row className="clear-fix contact-address-content">
						<Col lg="6" md="6" sm="12" xs="12">
							<div className="left-side">
								<h2>Contact Info</h2>
								<p>There are many variations of passages of Lorem Ipsum available, but the majori have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a pas of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.</p>

								<ul>
									<li>
										<div className="icon tran3s round-border p-color-bg"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
										<h6>Address</h6>
										<p>Freedom Way, Jersey City, NJ 07305, USA</p>
									</li>
									<li>
										<div className="icon tran3s round-border p-color-bg"><i className="fa fa-phone" aria-hidden="true"></i></div>
										<h6>Phone</h6>
										<p>+88 01911854378</p>
									</li>
									<li>
										<div className="icon tran3s round-border p-color-bg"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
										<h6>Email</h6>
										<p>backpiper.com@gmail.com</p>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
					<ContactForm />
                </div>
            </div>);
    }
};

export { Contact };