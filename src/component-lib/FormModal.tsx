import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

type FormModalTypes = {
	setAlert: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
	formType: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleClose: () => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormModal = ({
	open,
	formType,
	handleClose,
	handleSubmit,
}: FormModalTypes) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{
				component: motion.div,
				initial: { opacity: 0, scale: 0.9, y: 40 },
				animate: { opacity: 1, scale: 1, y: 0 },
				transition: { duration: 0.4 },
				sx: {
					background: "rgba(10,10,10,0.75)",
					backdropFilter: "blur(18px)",
					WebkitBackdropFilter: "blur(18px)",
					border: "1px solid rgba(255,255,255,0.08)",
					borderRadius: "24px",
					boxShadow: "0 0 30px rgba(2,171,130,0.12), 0 0 80px rgba(0,0,0,0.4)",
					padding: "8px",
					color: "white",
					minWidth: "420px",
				},
			}}
		>
			<DialogTitle
				sx={{
					fontSize: "1.8rem",
					fontWeight: 700,
					color: "white",
					textAlign: "center",
				}}
			>
				Add {formType}
			</DialogTitle>

			<DialogContent>
				<form
					onSubmit={handleSubmit}
					id={`${formType}-form`}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "18px",
						marginTop: "10px",
					}}
				>
					<TextField
						autoFocus
						required
						id={`${formType}Name`}
						name="name"
						label={`${formType} Name`}
						type="text"
						fullWidth
						variant="outlined"
						InputLabelProps={{
							style: { color: "rgba(255,255,255,0.7)" },
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								color: "white",
								borderRadius: "14px",
								background: "rgba(255,255,255,0.04)",

								"& fieldset": {
									borderColor: "rgba(255,255,255,0.08)",
								},

								"&:hover fieldset": {
									borderColor: "rgba(2,171,130,0.4)",
								},

								"&.Mui-focused fieldset": {
									borderColor: "rgba(2,171,130,0.7)",
									boxShadow: "0 0 12px rgba(2,171,130,0.25)",
								},
							},
						}}
					/>

					<TextField
						required
						id={`${formType}URL`}
						name="url"
						label={`${formType} URL`}
						type="url"
						fullWidth
						variant="outlined"
						InputLabelProps={{
							style: { color: "rgba(255,255,255,0.7)" },
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								color: "white",
								borderRadius: "14px",
								background: "rgba(255,255,255,0.04)",

								"& fieldset": {
									borderColor: "rgba(255,255,255,0.08)",
								},

								"&:hover fieldset": {
									borderColor: "rgba(2,171,130,0.4)",
								},

								"&.Mui-focused fieldset": {
									borderColor: "rgba(2,171,130,0.7)",
									boxShadow: "0 0 12px rgba(2,171,130,0.25)",
								},
							},
						}}
					/>

					<TextField
						id="altField"
						name="alt"
						label="ALT value"
						type="text"
						fullWidth
						variant="outlined"
						InputLabelProps={{
							style: { color: "rgba(255,255,255,0.7)" },
						}}
						sx={{
							"& .MuiOutlinedInput-root": {
								color: "white",
								borderRadius: "14px",
								background: "rgba(255,255,255,0.04)",

								"& fieldset": {
									borderColor: "rgba(255,255,255,0.08)",
								},

								"&:hover fieldset": {
									borderColor: "rgba(2,171,130,0.4)",
								},

								"&.Mui-focused fieldset": {
									borderColor: "rgba(2,171,130,0.7)",
									boxShadow: "0 0 12px rgba(2,171,130,0.25)",
								},
							},
						}}
					/>
				</form>
			</DialogContent>

			<DialogActions
				sx={{
					padding: "20px",
					justifyContent: "space-between",
				}}
			>
				<Button
					onClick={handleClose}
					sx={{
						color: "rgba(255,255,255,0.7)",
						textTransform: "none",
						fontSize: "1rem",
					}}
				>
					Cancel
				</Button>

				<Button
					type="submit"
					form={`${formType}-form`}
					variant="contained"
					sx={{
						background:
							"linear-gradient(135deg, rgba(2,171,130,1), rgba(2,171,130,0.7))",

						borderRadius: "12px",

						paddingInline: "20px",

						textTransform: "none",

						fontWeight: 600,

						boxShadow: "0 0 16px rgba(2,171,130,0.25)",

						"&:hover": {
							background:
								"linear-gradient(135deg, rgba(2,171,130,1), rgba(2,171,130,0.85))",

							transform: "translateY(-2px)",
						},
					}}
				>
					Add {formType}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default FormModal;
