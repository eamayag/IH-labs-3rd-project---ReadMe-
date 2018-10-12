import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: props.profile
    };
  }



  render() {
   
    return (
      <div>
        <h1>
          Edit your <em>ReadMe!</em> profile
        </h1>

      </div>
    );
  }
}

export default Edit;
