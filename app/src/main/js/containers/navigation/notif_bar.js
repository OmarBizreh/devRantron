import { remote } from 'electron';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notification from './notif';
import { fetch } from '../../actions/rants';

const rantscript = remote.getGlobal('rantscript');
let AllNotifNodes = [];

const auth = {
  auth_token: {
    id: 533581,
    key: '',
    expire_time: 1494934734,
    user_id: 161184,
  },
};

// @tahnik hook this up to redux please :)

class NotifBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifs: {},
      inScrollable: false,
      openAll: false,
    };
  }

  componentWillMount() {
    rantscript
      .notifications(auth.auth_token, 0)
      .then((resp) => {
        this.setState({ notifs: resp.data });
      });
  }

  componentDidMount() {
    setInterval(() => {
      rantscript
        .notifications(auth.auth_token, this.state.notifs.check_time)
        .then((resp) => {
          const items = resp.data.items;
          console.log(resp.data);
          if (items.length !== 0) {
            this.setState({ notifs: {
              check_time: resp.data.check_time,
              items: [items, ...this.state.notifs.items],
              username_map: [...this.state.notifs.items, resp.data.username_map],
            } });
            console.log(this.state.notifs);
          }
        });
    }, 5000);
    document.body.addEventListener('mousemove', (e) => {
      if (e.clientX > window.innerWidth - 75 && !this.state.inScrollable) {
        this.setState({ inScrollable: true });
      } else if (e.clientX < window.innerWidth - 75 && this.state.inScrollable) {
        this.setState({ inScrollable: false });
      }
    });
  }

  toggleDetailed() {
    this.setState({ openAll: !this.state.openAll });

    const cScroll = document.getElementById('notif_drawer').scrollTop;
    const wh = window.innerHeight;

    const flex = (this.state.openAll ? '' : 'flex');
    const opacity = (this.state.openAll ? '' : '1');
    const transform = (this.state.openAll ? '' : 'translateX(0px)');

    let f = 1;
    for (let i = 0; i < this.state.notifs.items.length; i += 1) {
      const notifDetailed = AllNotifNodes[i].childNodes[0];
      if (notifDetailed.offsetTop + 75 > cScroll && notifDetailed.offsetTop - 75 < cScroll + wh) {
        f += 1;
        setTimeout(() => {
          notifDetailed.style.display = flex;
          notifDetailed.style.opacity = opacity;
          notifDetailed.style.transform = transform;
        }, 50 * f);
      } else {
        notifDetailed.style.display = flex;
        notifDetailed.style.opacity = opacity;
        notifDetailed.style.transform = transform;
      }
    }
  }

  render() {
    if (this.state.notifs.items !== undefined) {
      setTimeout(()=>{AllNotifNodes = document.getElementsByClassName('notif')},4000);
      return (
        <div className="notif_nav" id="notif_nav">
          <button
            onClick={() => this.toggleDetailed()}
            className="btn side_nav_toggle"
          >
            <i className="ion-android-notifications" />
          </button>
          <div
            id="notif_drawer"
            className={`notif_drawer ${(!this.state.inScrollable ? 'noMouse' : '')}`}
          >
            {
              this.state.notifs.items.map((notif, index) =>
                <Notification
                  notif={notif}
                  index={index}
                  user={this.state.notifs.username_map[notif.uid]}
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
          className="btn side_nav_toggle"
        >
          <i className="ion-android-notifications" />
        </button>
        <div className="notif_drawer" id="notif_drawer" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rants: state.rants,
  };
}

export default connect(mapStateToProps, { fetch })(NotifBar);
