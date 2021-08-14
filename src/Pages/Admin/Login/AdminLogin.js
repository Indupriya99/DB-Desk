import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './adminLogin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state);
      let input = {};
      input["email"] = "";
      this.setState({ input: input });
      // alert('Demo Form is submited');
      window.location.href = './dashboard.html';
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;



    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }


    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
      <div className='adjust'>
        <div className="auth-wrapper">
        <div data-aos={'zoom-out-up'} className="auth-inner">
        <form onSubmit={this.handleSubmit}>
                <h3  className='admin-sign-in'>Admin Sign In</h3>
                <div class="container">
                  <label for="email" className='emailLabel'>Email Address:</label>
                  <input 
                      type="text" 
                      name="email" 
                      value={this.state.input.email}
                      onChange={this.handleChange}
                      // class="form-control" 
                      className='myInput'
                      placeholder="Enter email" 
                      id="email" />
                  <div className="text-danger anyErros">{this.state.errors.email}</div>
                </div>
                <button type="submit" className="mybtn">Sign In</button>
            </form>
        </div>
        </div>
      </div>
    );
  }
}