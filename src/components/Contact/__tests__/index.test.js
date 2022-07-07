/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact form', () => {
    it('renders', () => {
        render(<Contact/>);
    });

    it('matches snapshot', () => {
        const { asFragment } =render(<Contact/>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches content', () => {
        const { getByTestId } = render(<Contact/>)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    });
})