import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

class SettingsEdit extends Component {
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
    // set your initial states from redux state (theme)
    const { theme } = this.props;
    this.setState({ backgroundColor: theme.backgroundColor });
  }
  render() {
    //this.props.previewTheme = '#fff'
    const { theme } = this.props;
    // you can call this.props.changeBackground() from here
    return (
      <div className="settings_edit" >
        <ChromePicker
          color={theme.backgroundColor}
          onChange={(c) => {
            this.state.theme.backgroundColor = `rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`;
          }}
          onChangeComplete={(c) => {
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
