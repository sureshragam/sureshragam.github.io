import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

type FormModalTypes = {
	setAlert: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
	formType: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleClose: () => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
const FormModal = ({
	setAlert,
	open,
	formType,
	setOpen,
	handleClose,
	handleSubmit,
}: FormModalTypes) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle> Add {formType}</DialogTitle>
			<DialogContent>
				<form onSubmit={handleSubmit} id={`${formType}-form`}>
					<TextField
						autoFocus
						required
						margin="dense"
						id={`${formType}Name`}
						name="name"
						label={`${formType} Name`}
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						required
						margin="dense"
						id={`${formType}URL`}
						name={"url"}
						label={`${formType} URL`}
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
					form={`${formType}-form`}
				>
					Add {formType}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default FormModal;
