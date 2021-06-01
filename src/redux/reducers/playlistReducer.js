import actionTypes from '../actions/actionTypes';

function playlistReducer(playlists = [], { type, newPlaylists }) {
  let currentPlaylists = [...playlists];
  switch (type) {
    case (actionTypes.LOAD_PLAYLISTS):
      currentPlaylists = newPlaylists;
      break;
    default:
      break;
  }

  return currentPlaylists;
}

export default playlistReducer;
