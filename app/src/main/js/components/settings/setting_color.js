import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

class ColorSetting extends Component {
  constructor() {
    super();
    this.state = {
      colorOpen: false,
    };
  }

  render() {
    return (
      <div className="setting">
        <span>Background Color</span>
        <div
          className="color_preview"
          style={{ background: this.props.color }}
          onClick={() => this.setState({ colorOpen: !this.state.colorOpen })}
        />
        <div className={`chromepicker ${(this.state.colorOpen ? '' : 'hidden')}`}>
          <ChromePicker
            color={this.props.color}
            onChange={(c) => {
              this.props.changeColor(`rgba(${c.rgb.r},${c.rgb.g},${c.rgb.b},${c.rgb.a})`);
            }}
          />
        </div>
      </div>
    );
  }
}

ColorSetting.propTypes = {
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default ColorSetting;
