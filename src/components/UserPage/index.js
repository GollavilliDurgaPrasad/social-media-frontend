import React, { Component } from "react";
import './index.css'

class UserPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        handle: "",
        images: [],
      };
    }
  
    handleImageChange = (event) => {
      this.setState({ images: [...event.target.files] });
    };
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("name", this.state.name);
      formData.append("handle", this.state.handle);
      this.state.images.forEach((image) => formData.append("images", image));
  
      // Send the data to the backend API (you'll need to set up an API route for this)
      await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });
    };
  
    render() {
      return (
        <div className="mainContainer">
          <div className="userSubmitFormContainer">
            <h1 className="heading">User Submission Form</h1>
            <form className="formContainer" onSubmit={this.handleSubmit}>
              <p className="paragraph">Name:</p>
              <input
                className="bar"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
                required
              />
              <p className="paragraph">Social Media Handle:</p>
              <input
                className="bar"
                type="text"
                name="handle"
                value={this.state.handle}
                onChange={this.handleChange}
                placeholder="Social Media Handle"
                required
              />
              <p className="paragraph"> Upload images:</p>
              <input
                className="bar"
                type="file"
                multiple
                onChange={this.handleImageChange}
                required
              />
              <p></p>
              <button className="submitBtn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default UserPage;