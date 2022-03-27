import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Form from './CreateTankForm';

describe('Form', () => {
  it('should render a form with three inputs and a button', () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const titleInput = screen.getByLabelText('title');

    const textInput = screen.getByLabelText('text');
    const fishInput = screen.getByLabelText('fish');
    const submitButton = screen.getByRole('button', { name: /speichern/i });

    expect(titleInput).toBeInTheDocument();
    expect(fishInput).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('does not submit form if one input field is left empty', () => {
    const handleFormSubmit = jest.fn();
    const mockSetNewTank = jest.fn();
    const mockData = [
      {
        date: '24.03.2022',
        title: 'title',
        text: 'text',
        fish: 'fish',
      },
    ];
    render(
      <MemoryRouter>
        <Form
          setNewTank={mockSetNewTank}
          newTank={mockData}
          onSubmit={handleFormSubmit}
        />
      </MemoryRouter>
    );
    const titleInput = screen.getByLabelText('title');

    const textInput = screen.getByLabelText('text');

    const submitButton = screen.getByRole('button', { name: /speichern/i });

    userEvent.type(titleInput, 'title');
    userEvent.type(textInput, 'text');

    userEvent.click(submitButton);

    const submitMessage = screen.getByText('Das Aquarium wird befüllt');
    expect(submitMessage).toBeInTheDocument();
  });
});
