import { useState } from "react";

import FormModal from "../../component-lib/FormModal.tsx";
import NotifyUserComponent from "../../component-lib/NotifyUserComponent.tsx";

export const Admin = () => {
	const [alert, setAlert] = useState(false);
	const [formType, setFormType] = useState<any>("Certificate");

	return (
		<div>
			<h1>Admin page</h1>
			<FormModal
				setAlert={setAlert}
				formType={formType}
				setFormType={setFormType}
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
