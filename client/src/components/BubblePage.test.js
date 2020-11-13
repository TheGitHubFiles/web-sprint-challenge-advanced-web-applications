import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BubblePage from "./BubblePage";

const fakeData = [
  {
    color: "red",
    id: 1,
    code: { hex: "#FF0000" },
  },
  {
    color: "blue",
    id: 2,
    code: { hex: "#0000FF" },
  },
];

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const { rerender } = render(<BubblePage colorList={[]} />);
  rerender(<BubblePage colorList={fakeData} />);
  const colortext = screen.findByRole('span');
  console.log(colortext);
});
