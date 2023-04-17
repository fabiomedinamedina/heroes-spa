import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

// jest.mock('../../node_modules/query-string', () => '');

describe('Pruebas en <AppRouter />', () => {

  test('Debería mostrar el login si no esta autenticado', () => {
    
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug()

  });
  
})