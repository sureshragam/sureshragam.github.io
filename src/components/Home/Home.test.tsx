// Home.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import React from "react";

// ✅ Mock react-redux
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}));

import { useSelector } from "react-redux";

const mockSelectorData = {
  data: {
    home: {
      miniTitle: "Hi, I am",
      title: "Suresh Ragam",
      roles: ["Frontend Developer", "React Developer"]
    },
    buttons: {
      resumeBtn: "Resume",
      contactBtn: "Contact"
    }
  }
};

// ✅ Set mock return value before each test
beforeEach(() => {
  (useSelector as jest.Mock).mockReturnValue(mockSelectorData);
});

test("renders Suresh", async () => {
  render(<Home />);
  const nameElement = await screen.findByText("Suresh");
  expect(nameElement).toBeInTheDocument();
});
