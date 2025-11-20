import { useState } from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";

import FormModal from "../../component-lib/FormModal.tsx";
import NotifyUserComponent from "../../component-lib/NotifyUserComponent.tsx";

export const Admin = () => {
	const [alert, setAlert] = useState(false);
	const [formType, setFormType] = useState<any>("Certificate");

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = (type: String) => {
		setFormType(type);
		setOpen(true);
	};

	const fetchAPI = async (url: string, options: any) => {
		url = "";
		try {
			const res = await fetch(url, options);
			console.log(res, "res");
			if (res.status == 200) {
				setAlert(true);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formJson = Object.fromEntries((formData as any).entries());

		let URL = "";
		let options = {};
		if (formType === "Certificate") {
			URL = "http://localhost:8080/certificate";
			options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formJson),
			};
		}
		if (formType === "Project") {
			URL = "http://localhost:8080/project";
			options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formJson),
			};
		}

		fetchAPI(URL, options);
		handleClose();
	};

	return (
		<div>
			<h1>Admin page</h1>
			<ButtonGroup>
				<Button
					sx={{ color: "var(--primaryColor,#f9004d)" }}
					variant="outlined"
					onClick={() => handleClickOpen("Certificate")}
				>
					Add Certificate
				</Button>
				<Button
					sx={{ color: "var(--primaryColor,#f9004d)" }}
					variant="outlined"
					onClick={() => handleClickOpen("Project")}
				>
					Add Project
				</Button>
			</ButtonGroup>
			<FormModal
				setAlert={setAlert}
				formType={formType}
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
				handleSubmit={(event) => handleSubmit(event)}
			/>
			<NotifyUserComponent
				message={`${formType} added successfully`}
				open={alert}
				alertType={"success"}
				setOpen={setAlert}
			/>
		</div>
	);
};
