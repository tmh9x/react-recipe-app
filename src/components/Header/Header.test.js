import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen } from "@testing-library/react";

import Header from "./Header";
import React from "react";
import { ThemeProvider } from "../../contexts/ThemeContext";

describe("Header Component", () => {
    test("renders the header with the correct initial theme", () => {
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        );

        expect(screen.getByText("Recipes")).toBeInTheDocument();
        expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    });

    test("toggles theme on button click", () => {
        render(
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        );

        const toggleButton = screen.getByRole("button");

        // Initial theme should be light, so moon icon should be present
        expect(screen.getByTestId("moon-icon")).toBeInTheDocument();

        // Click to toggle theme
        fireEvent.click(toggleButton);

        // Now the theme should be dark, so sun icon should be present
        expect(screen.getByTestId("sun-icon")).toBeInTheDocument();

        // Click to toggle theme back to light
        fireEvent.click(toggleButton);

        // Now the theme should be light again, so moon icon should be present
        expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
    });
});
