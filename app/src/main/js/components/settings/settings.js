import React from 'react';
import PropTypes from 'prop-types';
import SettingsEdit from './settings_edit';
import SettingsPreview from './settings_preview';

const Settings = (props) => {
  const { theme, changeBackground } = props;
  return (
    <div className="settings_container" >
      <SettingsEdit
        theme={theme}
        changeBackground={changeBackground}
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
