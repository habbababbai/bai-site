import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders and this is my webiste text", () => {
    render(<App />);
    const linkElement = screen.getByText(/And this is my website/i);
    expect(linkElement).toBeInTheDocument();
});
