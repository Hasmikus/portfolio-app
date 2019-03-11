import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const projects = {
	web: [
		{ src: "/assets/images/project/1.jpg", width: 4, height: 3 },
		{ src: "/assets/images/project/2.jpg", width: 4, height: 3},
		{ src: "/assets/images/project/3.jpg", width: 4, height: 3 },
		{ src: "/assets/images/project/4.png", width: 4, height: 3 }
	],
	mobile: [
		{ src: "/assets/images/project/5.png", width: 4, height: 3 },
		{ src: "/assets/images/project/6.png", width: 4, height: 3}
	],
	bots: [
		{ src: "/assets/images/project/7.jpg", width: 4, height: 3}
	],
	hibryd: [

	]
}
class Projects extends Component {
	state = {
		currentImage: 0,
		selectedSection: 'all'
	};

	openLightbox = (e, obj) => {
		this.setState({
			currentImage: obj.index,
			lightboxIsOpen: true,
		});
	};

	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	};

	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	};

	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	};

	onSectionChange = (section) => () => {
		this.setState({
			selectedSection: section
		});
	};

	getProjectsPictures() {
		let projectScrnshots = [];
		if (this.state.selectedSection === 'all') {
			Object.keys(projects).forEach(section => {
				projectScrnshots = [ ...projects[section], ...projectScrnshots];
			});
		} else {
			projectScrnshots = projects[this.state.selectedSection];
		}
		return projectScrnshots;
	}

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
							<li className="filter tran3s active" onClick={this.onSectionChange('all')}>All</li>
							<li className="filter tran3s" onClick={this.onSectionChange('web')}>Web Development</li>
							<li className="filter tran3s" onClick={this.onSectionChange('mobile')}>Mobile Development</li>
							<li className="filter tran3s" onClick={this.onSectionChange('bots')}>Bots</li>
							<li className="filter tran3s" onClick={this.onSectionChange('hibryd')}>Hibryd Applications</li>
	        			</ul>
					</div>

					<Gallery photos={this.getProjectsPictures()} onClick={this.openLightbox} />
					<Lightbox images={this.getProjectsPictures()}
						onClose={this.closeLightbox}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						currentImage={this.state.currentImage}
						isOpen={this.state.lightboxIsOpen} />
				</div>
			</div>
        );
    }
};

export { Projects };