import React, { Component } from 'react';
import ROUTES from '../../consts/routes';

const SIDE_NAV_ITEMS = [
  { name: 'Rants', route: ROUTES.main.rants, icon: 'ion-chatboxes' },
  { name: 'Collabs', route: ROUTES.main.collabs, icon: 'ion-person-stalker' },
  { name: 'Stories', route: ROUTES.main.stories, icon: 'ion-ios-bookmarks' },
  { name: 'Weekly', route: ROUTES.main.weekly, icon: 'ion-calendar' },
  { name: 'Settings', route: ROUTES.main.settings, icon: 'ion-android-settings' },
];

class NotifBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavHidden: true,
      translateX: 10,
    };
  }
  hideNav() {
    this.setState({ sideNavHidden: true, translateX: 10 });
  }
  showNav() {
    this.setState({ sideNavHidden: false, translateX: 0 });
  }
  toggleNav() {
    if (this.state.sideNavHidden) {
      this.showNav();
    } else {
      this.hideNav();
    }
  }
  render() {
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
          style={{ transform: `translateX(${this.state.translateX}rem)` }}
        >
          {/* ++ On comment / on rant */}
          <div className="notif_user">
            <img alt="user" src="https://avatars.devrant.io/v-11_c-3_b-5_g-m_9-1_1-1_16-14_3-2_8-3_7-3_5-3_12-1_6-3_10-9_2-54_11-2_4-3_19-2_21-2.jpg" />
            <div className="badge notif_new">
              <i className="ion-plus-round" />
            </div>
          </div>
          {/* Mentions / Comment on your rant */}
          <div className="notif_user">
            <img alt="user" src="https://avatars.devrant.io/v-11_c-3_b-6_g-m_9-2_1-4_16-9_3-14_8-4_7-4_5-4_12-4_6-10_10-9_2-49_15-18_11-2_18-4_4-4_19-3_20-14.jpg" />
            <div className="badge">
              <i className="ion-chatbubble-working" />
            </div>
          </div>
          {/* New comment in rant */}
          <div className="notif_user">
            <img alt="user" src="https://avatars.devrant.io/v-11_c-3_b-3_g-m_9-1_1-2_16-6_3-4_8-2_7-2_5-1_12-2_6-3_10-9_2-10_15-11_18-3_4-1_19-3_20-1.jpg" />
            <div className="badge">
              <i className="ion-chatbubbles" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default NotifBar;
