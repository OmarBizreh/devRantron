import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_image: 'v-11_c-1_b-5_g-m_9-1_1-1_16-14_3-2_8-3_7-3_5-3_12-1_6-3_10-9_2-54_11-2_4-3_19-2_21-2.png',
      user_tint: '#d55161',
    };
  }
  componentWillMount() {

  }

  render() {
    return (
      <div className="main_container" >
        <div className="profile_card">
          <div className="profile_image">
            <img alt="user" src={`https://avatars.devrant.io/${this.state.user_image}`} />
            <div className="profile_image_tint" style={{ background: this.state.user_tint }} />
          </div>
          <ul className="profile_description">
            <div className="profile_username">
              <span>Dacexi</span>
              <p className="user_score">+99999</p>
            </div>
            <li><i className="ion-person" /><p>I pretend to know programming. Currently working on github.com/tahnik/devRantron
I pretend to know programming. Currently working on github.com/tahnik/devRantron
I pretend to know programming. Currently working on github.com/tahnik/devRantron
I prete</p></li>
            <li><i className="ion-code" /><p>C#, C, PHP, Python, HTML, JS, React Native, Vue</p></li>
            <li><i className="ion-social-github" /><p>rekkyrek</p></li>
            <li><i className="ion-location" /><p>Sweden</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
