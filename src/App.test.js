import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Mock react-redux
jest.mock("react-redux", () => ({
	useSelector: jest.fn(),
	useDispatch: () => jest.fn(),
}));

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
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);

	const name = await screen.findByText("Ragam");
	expect(name).toBeInTheDocument();
});
