import { SETTINGS } from '../consts/types';

const changeBackground = value => (dispatch) => {
  dispatch({
    type: SETTINGS.THEME.CHANGE_BACKGROUND,
    value,
  });
};

export { changeBackground };
