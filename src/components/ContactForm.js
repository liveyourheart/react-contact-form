import React, {Component} from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      comments: '',
      selected: '',
      isSubscribing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    console.log(e);
    alert(JSON.stringify(this.state));
    e.preventDefault();
  }

  handleReset(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Contact Form</h1>
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
          <label>
            Why are you Contacting us?
          <select name="selected" value={this.state.selected} onChange={this.handleChange}>
            <option>To check in</option>
            <option>To Say Hi</option>
            <option>Just Cause</option>
          </select>
          </label>
          <textarea name="comments" type="textarea" value={this.state.comments} onChange={this.handleChange} placeholder="Comments go here..."/>
          <label>
            Subscribe?
            <input name="isSubscribing" type="checkbox" checked={this.state.isSubscribed} onChange={this.handleChange} />
          </label>
        <input type="submit" value="Submit"/>
        <input type="button" value="Clear" onClick={this.handleReset}/>
      </form>
    )
  }
}