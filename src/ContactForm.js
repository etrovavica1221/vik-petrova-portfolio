import React, { Component } from 'react';
import { Form, Button, Label, FormGroup } from 'reactstrap';
import './styles/Contact.css';

class ContactForm extends Component {
  state = {
    message: '',
    name: '',
    email: '',
    formSubmitted: false,
    alert: false,
    responseMessage: '',
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;

    this.sendMessage(
      template,
      this.sender,
      receiverEmail,
      this.state.message,
      user,
      this.state.name,
      this.state.email,
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendMessage(templateId, senderEmail, receiverEmail, message, user, name, email) {
    window.emailjs
      .send('default_service', templateId, {
          senderEmail,
          receiverEmail,
          message,
          name,
          email,
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true, 
          alert: true,
          responseMessage: 'Thank you for contacting me!\n I will reply to you as soon as I can.',
        });
        console.log(res);
      })
      .catch(err => {
        this.setState({
          formEmailSent: false, 
          responseMessage: 'Error!\n Try again later or contact me via social media.',
        });
        console.log(err);
      });
  }

  render() {
    const alert = this.state.alert;
    const res = this.state.responseMessage;
    return (
      <div>
        {alert === false ? 
          <Form id="message-form" onSubmit={this.handleSubmit}>
            <h1 id="contact-title">Contact me</h1>
            <FormGroup>
              <Label className="input-label" for="name">Name</Label>
              <input
                id='name'
                name='name'
                placeholder='Name (required)'
                type='text'
                className='form-input'
                onChange={this.handleChange}
                required
                value={this.state.name}
              />
            </FormGroup>
            <FormGroup>
              <Label className="input-label" for="email">Email</Label>
              <input
                id='email'
                name='email'
                placeholder='Email (required)'
                type='email'
                className='form-input'
                onChange={this.handleChange}
                required
                value={this.state.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <textarea
                className="text-input"
                id="message"
                name="message"
                onChange={this.handleChange}
                placeholder="Enter your message here (required)"
                required
                value={this.state.message}
              />
            </FormGroup>
          <Button id="contact-btn" type="submit" className="btn btn--submit">
            Submit
          </Button>
          </Form>
        :
          <div id="alert">
            {res}
          </div>
        }
      </div>
    );
  }
}

export default ContactForm;
