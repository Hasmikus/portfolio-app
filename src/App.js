import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { UpButton } from './components/UpButton';
  
class App extends Component {
  state = {
    refs: []
  }

  onNavItemClick = (type) => {
    if (this[type]) {
      window.scrollTo({
          top: ReactDOM.findDOMNode(this[type]).getBoundingClientRect().top - 50, 
          behavior: "smooth"
      })
    }
  };

  render() {
    return (
      <div className="App">
        <Header ref={ref => this.home = ref} onNavItemClick={this.onNavItemClick} />
        <Slider />
        <About ref={ref => this.about = ref} />
        <Projects ref={ref => this.projects = ref} />
        <Banner />
        <Contact ref={ref => this.contact = ref} />
        <Footer />
        <UpButton />
      </div>
    );
  }
}

export default App;