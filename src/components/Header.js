import React, { Component } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    //NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

class Header extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    };

    onNavItemClick = (type) => () => {
        this.props.onNavItemClick(type);
    };

    render() {
        return (
            <div className="headerContainer">
                <Navbar dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    {/*<NavbarBrand href="/" className="active">here should be app logo</NavbarBrand>*/}
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this.onNavItemClick('home')}>HOME</NavLink>
                            </NavItem>        
                            <NavItem>
                                <NavLink onClick={this.onNavItemClick('about')}>ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.onNavItemClick('projects')}>PORTFOLIO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.onNavItemClick('contact')}>CONTACT</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export { Header };