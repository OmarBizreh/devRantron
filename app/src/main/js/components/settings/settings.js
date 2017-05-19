import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsEdit from './settings_edit';
import SettingsPreview from './settings_preview';

class Settings extends Component {
  constructor() {
    super();
    this.state = {
      theme: {
        name: 'Dark Theme',
        backgroundColor: '#54556E',
        rant_card: {
          backgroundColor: '#40415A',
          color: 'white',
        },
        comment_card: {
          backgroundColor: '#40415A',
          color: 'white',
        },
        column: {
          backgroundColor: '#54556E',
          width: '27',
        },
        user_badge: {
          details_back: '#54556E',
        },
      },
    };
  }
  componentWillMount() {
    const { theme } = this.props;
    this.setState({
      theme: { backgroundColor: theme.backgroundColor },
    });
  }
  changeBackgroundPrev(value) {
    this.setState({
      theme: { backgroundColor: value },
    });
  }
  render() {
    const { theme, changeBackground } = this.props;
    return (
      <div
        className="settings_container"
      >
        <SettingsEdit
          theme={theme}
          changeBackground={changeBackground}
          changeBackgroundPrev={value => this.changeBackgroundPrev(value)}
        />
        <SettingsPreview theme={theme} previewTheme={this.state.theme} />
      </div>
    );
  }
}

Settings.propTypes = {
  theme: PropTypes.object.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default Settings;
