// App.test.js or Home.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the entire react-redux module
jest.mock("react-redux", () => ({
	useSelector: jest.fn(),
	useDispatch: () => jest.fn(),
}));

import { useSelector } from "react-redux";

beforeEach(() => {
	useSelector.mockImplementation(() => ({
		data: {
			home: {
				miniTitle: "Hi, I am",
				title: "Suresh Ragam",
				roles: ["Frontend Developer"],
			},
			buttons: {
				resumeBtn: "Resume",
				contactBtn: "Contact",
			},
		},
	}));
});

test("renders Ragam", async () => {
	render(<App />);
	const name = await screen.findByText("Ragam");
	expect(name).toBeInTheDocument();
});
