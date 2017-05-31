import { combineReducers } from 'redux';
import auth from './auth';
import settings from './settings';
import toast from './toast';
import user from './user';
import columns from './columns';
import column from './column';
import modal from './modal';
import notifs from './notifs';

const devRantron = combineReducers({
  auth,
  settings,
  toast,
  user,
  columns,
  modal,
  notifs,
  column,
});

export default devRantron;
