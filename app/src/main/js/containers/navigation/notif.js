import React, { Component } from 'react';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notif: this.props.notif,
      index: this.props.index,
      avatar: this.props.user.avatar,
      username: this.props.user.name,
      hover: false,
    };
  }

  componentDidMount() {
    const thisElement = document.getElementById(`notif_${this.state.index}`).childNodes[1];
    thisElement.addEventListener('mouseenter', () => {
      this.setState({ hover: true });
    });
    thisElement.addEventListener('mouseout', () => {
      setTimeout(() => {
        this.setState({ hover: false });
      }, 1000);
    });
  }

  render() {
    const notif = this.state.notif;
    const index = this.state.index;
    const username = this.state.username;

    let icon;
    let notifText;
    let userImage = 'res/images/empty_avatar.png';
    const avatar = this.state.avatar;

    if (avatar.i !== undefined) { userImage = `https://avatars.devrant.io/${avatar.i}`; }

    switch (notif.type) {
      case 'comment_mention':
        icon = 'ion-chatbubble-working';
        notifText = `${username} mentioned you in a comment.`;
        break;
      case 'comment_content':
        icon = 'ion-chatbubble-working';
        notifText = `${username} commented on your rant.`;
        break;
      case 'comment_discuss':
        icon = 'ion-chatbubbles';
        notifText = 'New comments on a rant you follow.';
        break;
      case 'comment_vote':
        icon = 'ion-chatbubbles';
        notifText = `${username} +1'd your comment.`;
        break;
      default:
        icon = 'ion-plus-round';
        notifText = `${username} +1'd your rant.`;
    }
    return (
      <div className="notif" key={`notif_${index}`} id={`notif_${index}`}>
        <div className={`notif_detailed ${(this.state.hover ? 'notif_detailed_show' : '')}`}>
          <p>{notifText}</p>
        </div>
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

/*Notification.propTypes = {
  notif: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  index: React.PropTypes.int.isRequired,
};*/
export default Notification;
