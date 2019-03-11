import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

class ContactForm extends Component {
    render() {
        return (
            <div className="send-message" id="send-message">
                <h2>Send Message</h2>
                <Form className="form-validation">
                    <FormGroup>
                        <Input type="text" name="firstName" placeholder="First Name*" className="single-input" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="lastName" placeholder="Last Name*" className="single-input" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Your Email*" className="single-input" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="subject" placeholder="Subject" className="single-input" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="message" placeholder="Write Message" />
                    </FormGroup>
                    <Button className="tran3s p-color-bg">Send Message</Button>
                </Form>
           </div>
            //     <div class="alert-wrapper" id="alert-success">
            //         <div id="success">
            //             <button class="closeAlert"><i class="fa fa-times" aria-hidden="true"></i></button>
            //             <div class="wrapper">
            //                    <p>Your message was sent successfully.</p>
            //              </div>
            //         </div>
            //     </div>
            //     <div class="alert-wrapper" id="alert-error">
            //         <div id="error">
            //                <button class="closeAlert"><i class="fa fa-times" aria-hidden="true"></i></button>
            //                <div class="wrapper">
            //                    <p>Sorry!Something Went Wrong.</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export { ContactForm };
