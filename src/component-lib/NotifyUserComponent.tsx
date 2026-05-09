import { Alert, Snackbar } from "@mui/material";

const NotifyUserComponent = ({ message, open, setOpen, alertType }) => {
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<Alert
				onClose={handleClose}
				severity={alertType}
				variant="filled"
				sx={{ width: "100%", zIndex: 2000, mt: 12 }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default NotifyUserComponent;
