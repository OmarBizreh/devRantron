import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SettingsEdit from './settings_edit';
import SettingsPreview from './settings_preview';

class Settings extends Component {
  render() {
    const { theme, changeBackground } = this.props;
    return (
      <div
        className="settings_container"
        style={{ color: theme.color }}
      >
        <SettingsEdit
          theme={theme}
          changeBackground={changeBackground}
        />
        <SettingsPreview theme={theme} />
      </div>
    );
  }
}

Settings.propTypes = {
  theme: PropTypes.object.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default Settings;
