import rantscript from '../consts/rantscript';
import { FEED, STATE } from '../consts/types';
import showToast from './toast';

const AMOUNT = 25;

const fetchRants = (sort, type) => (dispatch, getState) => {
  const { user } = getState().auth;
  let page = 0;
  let oldSort = '';
  let oldType = '';
  if (getState().items) {
    oldSort = getState().items.sort;
    oldType = getState().items.type;
    page = oldSort !== sort || oldType !== type ? 0 : getState().items.page;
  }
  if (page === 0) {
    dispatch({
      type: FEED.ACTION.RESET,
    });
  }
  let authToken = null;
  if (user) {
    authToken = user.authToken;
  }
  rantscript
      .rants(sort, AMOUNT, AMOUNT * page, authToken)
      .then((res) => {
        dispatch({
          type: FEED.ACTION.FETCH,
          state: STATE.SUCCESS,
          itemType: FEED.RANTS.NAME,
          items: res,
          page,
          sort,
        });
      })
      .catch(() => {
        showToast(dispatch, 'Username or Password is wrong');
        dispatch({
          type: FEED.ACTION.FETCH,
          itemType: FEED.RANTS.NAME,
          state: STATE.FAILED,
        });
      });
};

const fetchCollabs = (sort, type) => (dispatch, getState) => {
  const { user } = getState().auth;
  let page = 0;
  let oldSort = '';
  let oldType = '';
  if (getState().items) {
    oldSort = getState().items.sort;
    oldType = getState().items.type;
    page = oldSort !== sort || oldType !== type ? 0 : getState().items.page;
  }
  if (page === 0) {
    dispatch({
      type: FEED.ACTION.RESET,
    });
  }
  let authToken = null;
  if (user) {
    authToken = user.authToken;
  }
  rantscript
      .collabs(sort, AMOUNT, AMOUNT * page, authToken)
      .then((res) => {
        dispatch({
          type: FEED.ACTION.FETCH,
          state: STATE.SUCCESS,
          itemType: FEED.COLLABS.NAME,
          items: res,
          page,
          sort,
        });
      })
      .catch(() => {
        showToast(dispatch, 'Username or Password is wrong');
        dispatch({
          type: FEED.ACTION.FETCH,
          itemType: FEED.COLLABS.NAME,
          state: STATE.FAILED,
        });
      });
};

const fetchStories = (sort, range) => (dispatch, getState) => {
  const { user } = getState().auth;
  let page = 0;
  let oldSort = '';
  let oldRange = '';
  if (getState().items) {
    oldSort = getState().items.sort;
    oldRange = getState().items.range;
    page = oldSort !== sort || oldRange !== range ? 0 : getState().items.page;
  }
  if (page === 0) {
    dispatch({
      type: FEED.ACTION.RESET,
    });
  }
  let authToken = null;
  if (user) {
    authToken = user.authToken;
  }
  rantscript
      .stories(range, sort, AMOUNT, AMOUNT * page, authToken)
      .then((res) => {
        dispatch({
          type: FEED.ACTION.FETCH,
          state: STATE.SUCCESS,
          itemType: FEED.STORIES.NAME,
          items: res,
          page,
          sort,
          range,
        });
      })
      .catch(() => {
        showToast(dispatch, 'Username or Password is wrong');
        dispatch({
          type: FEED.ACTION.FETCH,
          itemType: FEED.STORIES.NAME,
          state: STATE.FAILED,
        });
      });
};

const fetch = (sort, type, range = null) => {
  switch (type) {
    case FEED.RANTS.NAME:
      return fetchRants(sort, type);
    case FEED.STORIES.NAME:
      return fetchStories(sort, range);
    case FEED.COLLABS.NAME:
      return fetchCollabs(sort, type);
    default:
      return fetchRants();
  }
};


export { fetch as default };
