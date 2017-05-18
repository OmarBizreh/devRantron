import DEFAULT_STATES from '../consts/default_states';
import { SETTINGS } from '../consts/types';

export default (state = DEFAULT_STATES.SETTINGS, action) => {
  switch (action.type) {
    case SETTINGS.THEME.CHANGE_BACKGROUND: {
      return { ...state, theme: { backgroundColor: action.value } };
    }
    default:
      return state;
  }
};
