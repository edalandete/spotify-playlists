/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ListPreview from './index';
import { render, screen } from '../../../assets/test-utils';

describe('List preview component', () => {
  test('should contain user Grande', () => {
    render(<ListPreview />, {
      initialState: {
        token: 'faketoken',
        user: {
          id: 'ppppp',
          display_name: 'Grande'
        },
        auth: {
          user: {
            sub: 'aaaaaa:fffffff:ppppp'
          }
        }
      }
    });

    expect(screen.getByText(/Grande/i)).toBeInTheDocument();
  });
  test('should contain arist name Ariana', () => {
    render(<ListPreview />, {
      initialState: {
        token: 'faketoken',
        user: {
          id: 'Grande',
          display_name: 'Grande'
        },
        auth: {
          user: {
            sub: 'aaaaaa:fffffff:ppppp'
          }
        },
        songs: [{
          track: {
            album: {
              artists: [
                { name: 'Ariana' }
              ],
              images: [
                { url: 'hhttpfkewfja' }
              ]
            }
          }
        }]
      }
    });

    expect(screen.getByText(/Ariana/i)).toBeInTheDocument();
  });
});
