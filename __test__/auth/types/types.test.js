import { types } from "../../../src/auth";

describe('Pruebas en "Types"', () => {
  test('Debería regregar estos types', () => {
    expect(  types ).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });
  });
})