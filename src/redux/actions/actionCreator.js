import axios from 'axios';
import actionTypes from './actionTypes';
import urls from '../../assets/urls';

export function getToken() {
  return async (dispatch) => {
    const token = await axios(urls.token, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_SECRET_CLIENT_ID}`)}`
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    });
    dispatch({
      type: actionTypes.GET_TOKEN,
      newToken: token.data.access_token
    });
  };
}

export function getUserData(token, sub) {
  const userID = sub.split(':').pop();
  return async (dispatch) => {
    const user = await axios(`${urls.user}${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true,
      method: 'GET'
    });
    dispatch({
      type: actionTypes.GET_USER,
      newUser: user.data
    });
  };
}

export function loadPlaylists(token, userId) {
  return async (dispatch) => {
    const response = await axios(urls.user + userId + urls.collection, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true,
      method: 'GET'
    });
    dispatch({
      type: actionTypes.LOAD_PLAYLISTS,
      newPlaylists: response.data.items
    });
  };
}

export function loadSongsfromPlaylist(token, playlistId) {
  return async (dispatch) => {
    const response = await axios(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      json: true,
      method: 'GET'
    });
    dispatch({
      type: actionTypes.LOAD_SONGS,
      newSongs: response.data.items
    });
  };
}

export function login(user) {
  return ({
    type: actionTypes.AUTH_LOGIN,
    user
  });
}

export function logout() {
  return ({
    type: actionTypes.AUTH_LOGOUT
  });
}
