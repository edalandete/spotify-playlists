/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';
import { render } from '../../../assets/test-utils';
import ListPreview from './index';
import { getToken } from '../../../redux/actions/actionCreator';
import actionTypes from '../../../redux/actions/actionTypes';

const token = {
  data: {
    access_token: 'fakeToken'
  }
};

jest.mock('axios');

describe('Given a function getToken', () => {
  describe('When invoked', () => {
    test('Should Dispatch actionType GET_TOKEN', async () => {
      render(<ListPreview />, {
        initialState: {
          token: false
        }
      });
      axios.mockResolvedValue(token);
      const dispatch = jest.fn();
      await getToken()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.GET_TOKEN,
        newToken: token.data.access_token
      });
    });
  });
});
