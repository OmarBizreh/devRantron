import React, { Component } from 'react';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notif: this.props.notif,
      index: this.props.index,
      avatar: this.props.avatar,
    };
  }

  render() {
    const notif = this.state.notif;
    const index = this.state.index;

    let icon;
    let userImage = 'res/images/empty_avatar.png';
    const avatar = this.state.avatar;

    if (avatar.i !== undefined) { userImage = `https://avatars.devrant.io/${avatar.i}`; }

    switch (notif.type) {
      case 'comment_mention':
        icon = 'ion-chatbubble-working';
        break;
      case 'comment_content':
        icon = 'ion-chatbubble-working';
        break;
      case 'comment_discuss':
        icon = 'ion-chatbubbles';
        break;
      default:
        icon = 'ion-plus-round';
    }
    return (
      <div className="notif" key={`notif_${index}`}>
        <div className="notif_user">
          <img alt="user" src={userImage} />
          <div className={`badge ${(notif.read === 0 ? 'notif_new' : '')}`}>
            <i className={icon} />
          </div>
        </div>
      </div>
    );
  }
}

/* Notification.propTypes = {
  notif: React.PropTypes.object.isRequired,
  index: React.PropTypes.int.isRequired,
};*/
export default Notification;
