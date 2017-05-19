import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

class SettingsEdit extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: '',
    };
  }
  componentWillMount() {
    // set your initial states from redux state (theme)
    const { theme } = this.props;
    this.setState({ backgroundColor: theme.backgroundColor });
  }
  render() {
    const { theme } = this.props;
    // you can call this.props.changeBackground() from here
    return (
      <div className="settings_edit" >
        <ChromePicker
          color={theme.backgroundColor}
          onChange={(c) => {
            this.props.changeBackground(`rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`);
          }}
        />
      </div>
    );
  }
}

SettingsEdit.propTypes = {
  theme: PropTypes.object.isRequired,
  changeBackground: PropTypes.func.isRequired,
};

export default SettingsEdit;
