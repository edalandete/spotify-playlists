import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getToken, getUserData, loadPlaylists, loadSongsfromPlaylist
} from '../../../redux/actions/actionCreator';
import './list-preview.css';

function ListPreview({
  token, user, playlists, dispatch, songs, auth
}) {
  const [currentToken, setCurrentToken] = useState(token);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  useEffect(() => {
    if (!token) dispatch(getToken());
  }, [currentToken]);

  if (currentToken === false && token) setCurrentToken(token);

  useEffect(() => {
    if (token && auth) {
      dispatch(getUserData(currentToken, auth?.user?.sub));
    }
  }, [currentToken]);

  if (currentUser === null && token && user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    if (token && user) dispatch(loadPlaylists(currentToken, user.id));
  }, [currentUser]);
  if (currentPlaylist === null && playlists.length) {
    setCurrentPlaylist(playlists[0]);
  }

  useEffect(() => {
    if (token && playlists) dispatch(loadSongsfromPlaylist(currentToken, playlists[0]?.id));
  }, [currentPlaylist]);

  return (
    <>
      <div className="userListTitle">
        <h2>
          {user?.display_name}
          , here is what we though you would like...
        </h2>
      </div>
      <div className="containerListSongs">
        <ul className="mosaicSongs">
          {songs.length && songs.map((song) => (
            <li className="li-container">
              <span className="badge">{song.track.album.artists[0]?.name}</span>
              <br />
              <img src={song.track.album?.images[1]?.url} className="img-tracks" alt="track img" />
              <br />
              <span className="badge">{song.track.name}</span>
              <br />
              <iframe
                src={`https://open.spotify.com/embed/track/${song.track.id}`}
                width="300"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title={song.track.uri}
              />
            </li>
          ))}
        </ul>
        <div>
          <div className="containerSoundcloud">
            Click
            <button type="button">
              <a href="https://soundcloud.com/gemmasings/sky-push" target="_blank" rel="noreferrer">HERE</a>
            </button>
            if you want to listen the new hit of the summer
          </div>
        </div>
      </div>
    </>
  );
}

ListPreview.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    display_name: PropTypes.string
  }).isRequired,
  playlists: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
  songs: PropTypes.shape([]).isRequired,
  auth: PropTypes.shape({
    user: PropTypes.shape({
      sub: PropTypes.shape({})
    })
  }).isRequired
};

function mapStateToProps({
  token, user, playlists, songs, auth
}) {
  return {
    token,
    user,
    playlists,
    songs,
    auth
  };
}

export default connect(mapStateToProps)(ListPreview);
