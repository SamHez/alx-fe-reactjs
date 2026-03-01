import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders TodoList component correctly', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a project')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Test Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    });

    test('toggles a todo completion status', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');

        // Initial state: not completed (no line-through)
        expect(todoItem).toHaveStyle('text-decoration: none');

        fireEvent.click(todoItem);

        // After click: completed (line-through)
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem);

        // After toggle back: not completed
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        const deleteButtons = screen.getAllByText('Delete');

        // Assuming the first delete button is for the first item
        fireEvent.click(deleteButtons[0]);

        expect(todoItem).not.toBeInTheDocument();
    });
});
