import React from 'react';
import PropTypes from 'prop-types';

const SettingsPreview = (props) => {
  const { theme } = props;
  return (
    <div className="settings_preview" >
      preview
    </div>
  );
};

SettingsPreview.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default SettingsPreview;
