import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import Footer from './Footer';
import React from 'react';
import { act } from 'react';

describe('Footer Component', () => {
    test('renders Footer component', () => {
        act(() => {
            render(<Footer />);
        });
        expect(screen.getByLabelText('Footer')).toBeInTheDocument();
    });

    test('displays contact information', () => {
        act(() => {
            render(<Footer />);
        });
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
        expect(screen.getByText('123 Main Street')).toBeInTheDocument();
        expect(screen.getByText('New York, NY 10001')).toBeInTheDocument();
        expect(screen.getByText('Email: info@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone: +1 (123) 456-7890')).toBeInTheDocument();
    });

    test('has social media links with correct href', () => {
        act(() => {
            render(<Footer />);
        });
        expect(screen.getByText('Follow Us')).toBeInTheDocument();

        const facebookLink = screen.getByTestId('fb-link');
        expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
        expect(facebookLink).toHaveAttribute('target', '_blank');
        expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');

        const linkedinLink = screen.getByTestId('li-link');
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com');
        expect(linkedinLink).toHaveAttribute('target', '_blank');
        expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('displays the current year', () => {
        act(() => {
            render(<Footer />);
        });
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear} Your Company. All rights reserved.`)).toBeInTheDocument();
    });
});
