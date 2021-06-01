import actionTypes from './actionTypes';
import { login, logout, getToken } from './actionCreator';

describe('Given a function creator', () => {
  const scenarios = [
    {
      callback: login,
      result: { type: actionTypes.AUTH_LOGIN }
    },
    {
      callback: logout,
      result: { type: actionTypes.AUTH_LOGOUT }
    }
  ];

  scenarios.forEach((scenario) => {
    describe('When invoked', () => {
      test(`Then return ${scenario.result}`, () => {
        const resultScenario = scenario.result;
        const result = scenario.callback();
        expect(resultScenario).toEqual(result);
      });
    });
  });
});

describe('Given a function getToken', () => {
  describe('When invoked', () => {
    test('Should Dispatch actionType GET_TOKEN', async () => {
      const dispatch = jest.fn();
      await getToken()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
