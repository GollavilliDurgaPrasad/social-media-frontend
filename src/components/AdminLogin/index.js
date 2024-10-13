import React, { Component } from 'react';
import './index.css'; // Import the CSS file

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., validate credentials)
    console.log('Logging in:', { username: this.state.username, password: this.state.password });
  };

  render() {
    return (
      <div className="container">
        <h2 className="title">Admin Login</h2>
        <form onSubmit={this.handleLogin} className="form">
          <div className="input-group">
            <label className="label" htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label className="label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="input"
              required
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    );
  }
}

export default AdminLogin;
