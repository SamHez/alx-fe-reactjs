import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders correctly', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    test('initial state is rendered', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a project')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const button = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Test Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    });

    test('toggles a todo completion status', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Learn React');

        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Build a project');
        const deleteButton = screen.getAllByText('Delete')[1]; // Second item

        fireEvent.click(deleteButton);
        expect(todoText).not.toBeInTheDocument();
    });
});
