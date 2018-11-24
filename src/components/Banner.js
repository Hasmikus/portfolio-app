import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
			<div className="page-middle-banner">
				<div className="opacity">
					<h3>We Create Creative <span className="p-color">&amp;</span> Best Unique Design</h3>
					<a href="#" className="hvr-bounce-to-right">Let's Work Together</a>
				</div>
			</div>
        );
    }
};

export { Banner };