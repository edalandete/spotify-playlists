import { combineReducers } from 'redux';
import playlists from './playlistReducer';
import token from './tokenReducer';
import user from './userReducer';
import auth from './authReducer';
import songs from './songsReducer';

const rootReducer = combineReducers({
  playlists,
  token,
  user,
  auth,
  songs
});

export default rootReducer;
