import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorSetting from './setting_color';

class SettingsEdit extends Component {
  constructor() {
    super();
    this.state = {
      bgColorOpen: false,
    };
  }
  /* componentWillMount() {
    // set your initial states from redux state (theme)
    const { theme } = this.props;
  } */
  render() {
    const { theme, changeBackground } = this.props;
    // you can call this.props.changeBackground() from here
    return (
      <div className="settings_edit" >
        <ul>
          <ColorSetting color={theme.backgroundColor} changeColor={changeBackground} />
        </ul>
      </div>
    );
  }
}

SettingsEdit.propTypes = {
  theme: PropTypes.object.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default SettingsEdit;
