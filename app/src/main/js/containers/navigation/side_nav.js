import React, { Component } from 'react';
import SideNavItem from './side_nav_item';
import ROUTES from '../../consts/routes';
import AuthButton from '../auth/auth_button';

const SIDE_NAV_ITEMS = [
  { name: 'Rants', route: ROUTES.main.rants, icon: 'ion-chatboxes' },
  { name: 'Collabs', route: ROUTES.main.collabs, icon: 'ion-person-stalker' },
  { name: 'Stories', route: ROUTES.main.stories, icon: 'ion-ios-bookmarks' },
  { name: 'Weekly', route: ROUTES.main.weekly, icon: 'ion-calendar' },
  { name: 'Settings', route: ROUTES.main.settings, icon: 'ion-android-settings' },
  { name: '/dev/null', route: ROUTES.main.profile, icon: 'ion-coffee' },
];

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavHidden: true,
      translateX: -10,
    };
  }
  hideNav() {
    this.setState({ sideNavHidden: true, translateX: -10 });
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
      <div className="side_nav" id="side_nav">
        <button
          onClick={() => this.toggleNav()}
          onBlur={() => this.hideNav()}
          className="btn side_nav_toggle"
        >
          <i className="ion-navicon-round" />
        </button>
        <div
          className="drawer"
          style={{ transform: `translateX(${this.state.translateX}rem)` }}
        >
          <div className="drawer_item_set" >
            {
            SIDE_NAV_ITEMS.map(item => <SideNavItem item={item} key={item.name} />)
          }
          </div>
          <div className="drawer_item_set" >
            <AuthButton />
          </div>
        </div>
      </div>
    );
  }
}


export default SideNav;
