import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heros';


const mockUseNavigate =  jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}));


describe('Pruebas en <SearchPage />', () => {

  beforeEach( () => jest.clearAllMocks() );
  
  test('Debería mostrarse correctamente con valores por defecto', () => {
    
    const {container}  = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect( container ).toMatchSnapshot();
    expect( screen.getByRole( 'button' ) ).toBeTruthy();


  });

  test('Debería mostrar a batman y el input con el valor del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    );

    expect( screen.getByRole( 'textbox' ).value ).toBe( 'batman' );
    expect( screen.getByLabelText( "img-hero" ).src ).toContain('/assets/heroes/dc-batman.jpg');

  });

  test('Debería mostrar un error si el hero no existe', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman22']}>
        <SearchPage />
      </MemoryRouter>
    );

    // screen.debug();
    expect( screen.getByRole( 'heading', { level: 2 } ).innerHTML ).toContain( '¡Disculpa!' );
    expect( screen.getByText( 'No se encuntraron héroes con XXXX, te pedimos que lo intentes con otro nombre.' ).innerHTML ).toBeTruthy();
  });

  test('Debería llamar el navigate a la pantalla nueva', () => {

    const stringSearch = 'Superman';

    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const inputText = screen.getByRole( 'textbox' );
    const buttonSearch = screen.getByRole( 'button' );
    fireEvent.change( inputText, {target: {value: stringSearch}} );
    fireEvent.click( buttonSearch );
    
    expect( mockUseNavigate ).toHaveBeenCalled();
    expect( mockUseNavigate ).toHaveBeenCalledWith( `?q=${stringSearch}` );
    
  });

})