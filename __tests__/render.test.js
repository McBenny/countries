/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from 'App';

afterEach(cleanup);

it('Renders Welcome to react', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText('Type here to search...')).toBeInTheDocument();
});
