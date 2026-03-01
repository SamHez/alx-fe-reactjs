import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders correctly and shows initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a project')).toBeInTheDocument();
    });

    test('allows adding a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByRole('button', { name: /Add Todo/i });

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Task')).toBeInTheDocument();
    });

    test('allows toggling a todo', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Learn React');

        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: none');
    });

    test('allows deleting a todo', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Learn React');
        // Delete button for 'Learn React' - since there are multiple 'Delete' buttons, we get the one next to the text
        const deleteButton = screen.getAllByText('Delete')[0];

        fireEvent.click(deleteButton);
        expect(todoText).not.toBeInTheDocument();
    });
});
