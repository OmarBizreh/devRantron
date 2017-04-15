import React from 'react';
import SideNav from '../containers/navigation/side_nav';
import NotifBar from '../containers/navigation/notif_bar';

function Nav() {
  return (
    <div>
      <div className="top_nav">
        <div className="top_nav_container" />
      </div>
      <SideNav />
      <NotifBar />
    </div>
  );
}

export default Nav;
