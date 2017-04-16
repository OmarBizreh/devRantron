import { remote } from 'electron';
import React, { Component } from 'react';
import Notification from './notif';

const rantscript = remote.getGlobal('rantscript');

class NotifBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifs: {},
    };
  }

  componentDidMount() {
    document.getElementsByClassName('main_container')[0].addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
    // @tahnik hook this up to redux please :)
    const auth = {
      auth_token: {
        id: 533581,
        key: 'HIDDEN',
        expire_time: 1494934734,
        user_id: 161184,
      },
    };

    rantscript
      .notifications(auth.auth_token, 0)
      .then((resp) => {
        this.setState({ notifs: resp.data });
      });
  }
  render() {
    if (this.state.notifs.items !== undefined) {
      return (
        <div className="notif_nav" id="notif_nav">
          <button
            onClick={() => this.toggleNav()}
            className="btn side_nav_toggle"
          >
            <i className="ion-android-notifications" />
          </button>
          <div className="notif_drawer" id="notif_drawer">
            {
              this.state.notifs.items.map((notif, index) =>
                <Notification
                  notif={notif}
                  index={index}
                  avatar={this.state.notifs.username_map[notif.uid].avatar}
                />,
              )
            }
          </div>
        </div>
      );
    }
    return (
      <div className="notif_nav" id="notif_nav">
        <button
          onClick={() => this.toggleNav()}
          className="btn side_nav_toggle"
        >
          <i className="ion-android-notifications" />
        </button>
        <div
          className="notif_drawer"
        />
      </div>
    );
  }
}


export default NotifBar;
