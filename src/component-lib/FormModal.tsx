import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonGroup } from "@mui/material";

const FormModal = ({ setAlert, formType, setFormType }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = (type: String) => {
		setFormType(type);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const fetchAPI = async (url: string, options: any) => {
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
		<Fragment>
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

			{formType === "Project" ? (
				<Dialog open={open && formType === "Project"} onClose={handleClose}>
					<DialogTitle> Add {formType}</DialogTitle>
					<DialogContent>
						<form onSubmit={handleSubmit} id="project-form">
							<TextField
								autoFocus
								required
								margin="dense"
								id="projectName"
								name="name"
								label="Project Name"
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								required
								margin="dense"
								id={"projectUrl"}
								name={"url"}
								label={"Project URL"}
								type="url"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id={"altField"}
								name={"alt"}
								label={"ALT value"}
								type="text"
								fullWidth
								variant="standard"
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button
							sx={{ color: "var(--primaryColor,#f9004d)" }}
							onClick={handleClose}
						>
							Cancel
						</Button>
						<Button
							sx={{ color: "var(--primaryColor,#f9004d)" }}
							type="submit"
							form="project-form"
						>
							Add Project
						</Button>
					</DialogActions>
				</Dialog>
			) : (
				<Dialog open={open && formType === "Certificate"} onClose={handleClose}>
					<DialogTitle> Add {formType}</DialogTitle>
					<DialogContent>
						<form onSubmit={handleSubmit} id="certificate-form">
							<TextField
								autoFocus
								required
								margin="dense"
								id={"certificateName"}
								name={"name"}
								label={"Certificate Name"}
								type="text"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								required
								margin="dense"
								id={"certificateURL"}
								name={"url"}
								label={"Certificate URL"}
								type="url"
								fullWidth
								variant="standard"
							/>
							<TextField
								autoFocus
								margin="dense"
								id={"altField"}
								name={"alt"}
								label={"ALT value"}
								type="text"
								fullWidth
								variant="standard"
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button
							sx={{ color: "var(--primaryColor,#f9004d)" }}
							onClick={handleClose}
						>
							Cancel
						</Button>
						<Button
							sx={{ color: "var(--primaryColor,#f9004d)" }}
							type="submit"
							form="certificate-form"
						>
							Add Certificate
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</Fragment>
	);
};

export default FormModal;
