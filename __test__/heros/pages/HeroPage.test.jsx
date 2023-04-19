import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { HeroPage } from "../../../src/heros";
import { MemoryRouter } from "react-router-dom";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'marvel-iron',
  }),
  useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <HeroPage />', () => {

  beforeEach(() => jest.clearAllMocks());
  
  test('Debería mostrar la información del héroe', () => {

    const valueContext = {
      logged: true,
      user: {
        name: 'Fabio Medina',
        email: 'fabio@fabiomedina.com'
      }
    }
    
    render(
      <AuthContext.Provider value={ valueContext }>
        <MemoryRouter initialEntries={["/hero"]}>
          <HeroPage />
        </MemoryRouter> 
      </AuthContext.Provider>
    );

    expect( screen.getByText('Iron Man') ).toBeTruthy();
    expect( screen.getByRole('button') ).toBeTruthy();

  });

  test('Debería devolver a página anterior useNavigate al hacer click en regresar', () => {

    const valueContext = {
      logged: true,
      user: {
        name: 'Fabio Medina',
        email: 'fabio@fabiomedina.com'
      }
    }
    
    render(
      <AuthContext.Provider value={ valueContext }>
        <MemoryRouter initialEntries={["/hero"]}>
          <HeroPage />
        </MemoryRouter> 
      </AuthContext.Provider>
    );

    const inputBack = screen.getByRole( 'button' );
    fireEvent.click( inputBack );

    expect( mockUseNavigate ).toHaveBeenCalled();
    expect( mockUseNavigate ).toHaveBeenCalledWith(-1);
    
  });


})