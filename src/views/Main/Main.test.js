import '@testing-library/jest-dom/extend-expect';

import Main from "./Main";
import React from "react";
import { render } from "@testing-library/react";

describe("Main Component", () => {
    test("renders children correctly", () => {
        const { getByText } = render(<Main><p>Test Child</p></Main>);

        expect(getByText("Test Child")).toBeInTheDocument();
    });

    test("applies correct classes for light theme", () => {
        const { container } = render(<Main><p>Test Child</p></Main>);

        expect(container.firstChild).toHaveClass("flex flex-grow bg-white dark:bg-gray-700");
    });

    // Additional test for dark theme if needed
    // You may want to wrap this with ThemeProvider and toggle theme like in the Header tests
});
