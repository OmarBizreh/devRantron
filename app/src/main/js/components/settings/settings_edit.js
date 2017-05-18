import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SettingsEdit extends Component {
  constructor() {
    super();
    // Use this component's state to keep the input value
    // https://facebook.github.io/react/docs/forms.html
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
        Edit
      </div>
    );
  }
}

SettingsEdit.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default SettingsEdit;
