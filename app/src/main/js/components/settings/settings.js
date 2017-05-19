import React from 'react';
import PropTypes from 'prop-types';
import SettingsEdit from './settings_edit';
import SettingsPreview from './settings_preview';

const Settings = (props) => {
  const { theme, changeBackground } = props;
  const previewTheme = theme;
  return (
    <div
      className="settings_container"
      style={{ background: previewTheme.backgroundColor }}
    >
      <SettingsEdit
        theme={theme}
        changeBackground={changeBackground}
        previewTheme={previewTheme}
      />
      <SettingsPreview theme={theme} />
    </div>
  );
};

Settings.propTypes = {
  theme: PropTypes.object.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default Settings;
