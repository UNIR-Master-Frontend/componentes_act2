import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';

describe('Componente Card', () => {
  
  it('debería renderizar los "children" correctamente', () => {
   
    render(<Card onClick={() => {}}>Contenido de prueba</Card>);
    
    const contenido = screen.getByText('Contenido de prueba');
    
    expect(contenido).toBeDefined();
  });

  it('debería ejecutar la función onClick cuando se le hace clic', () => {

    const funcionMock = vi.fn();
    
    render(<Card onClick={funcionMock}>Tarjeta clickeable</Card>);
    
    const tarjeta = screen.getByText('Tarjeta clickeable');
    
    fireEvent.click(tarjeta);
    
    expect(funcionMock).toHaveBeenCalledTimes(1);
  });

});