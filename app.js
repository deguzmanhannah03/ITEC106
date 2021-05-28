import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.username.value);

    if (!e.target.username.value) {
      alert("username is required");
    } else if (!e.target.username.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.username.value === "hannah" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.username.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong username or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail: </label>
            <input type="username" name="username" placeholder="hannah" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Submit</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Create New Account
        </button>
      </div>
    );
  }
}

export default App;
