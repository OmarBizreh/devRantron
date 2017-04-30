import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plusColor: null,
      minusColor: null,
    };
  }
  componentWillMount() {

  }

  render() {
    return (
      <div className="main_container" >
        <h1>Profile</h1>
      </div>
    );
  }
}

export default Profile;
