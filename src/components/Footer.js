import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return <footer>
            <div className="container">
                <a href="index.html" className="logo"><img src="/assets/images/logo/logo.png" alt="Logo" /></a>

                <ul>
                    <li><a href="#" className="tran3s round-border"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="tran3s round-border"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="tran3s round-border"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#" className="tran3s round-border"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                </ul>
                <p>Copyright @2018 All rights reserved by <a href="#" target="_blank">Us</a></p>
            </div>
        </footer>
    }
}

export { Footer };