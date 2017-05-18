import { connect } from 'react-redux';
import { changeBackground } from '../../actions/settings';
import Settings from '../../components/settings/settings';

const mapDispatchToProps = dispatch => ({
  changeBackground: (value) => {
    dispatch(changeBackground(value));
  },
});

const mapStateToProps = state => ({
  theme: state.settings.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
