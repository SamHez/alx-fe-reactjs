import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList component correctly', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    test('renders initial todos correctly', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a project')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const button = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles a todo item', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');

        // Toggle to completed
        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: line-through');

        // Toggle back to not completed
        fireEvent.click(todo);
        expect(todo).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo item', () => {
        render(<TodoList />);
        const todo = screen.getByText('Learn React');
        const deleteButton = screen.getAllByText('Delete')[0];

        fireEvent.click(deleteButton);
        expect(todo).not.toBeInTheDocument();
    });
});
