import { combineReducers } from 'redux';
import { USERS, ALBUMS, PHOTOS } from '../actions';

const pageTitle = (state = '', action) => {
  switch (action.type) {
    case USERS.REQUEST:
      return 'Users';
    case ALBUMS.REQUEST:
      return 'Albums';
    case PHOTOS.REQUEST:
      return 'Photos';
    default:
      return state;
  }
};

const listElements = (state = [], action) => {
  switch (action.type) {
    case USERS.RECEIVE:
      return action.users;
    case ALBUMS.RECEIVE:
      return action.albums;
    case PHOTOS.RECEIVE:
      return action.photos;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pageTitle,
  listElements,
});

export default rootReducer;
