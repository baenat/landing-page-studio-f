
import { useAlert } from "../../contexts/AlertContext";
import { AlertItem } from "./AlertItem";

export function AlertContainer() {
	const { alerts, removeAlert } = useAlert();

	return (
		<div className="fixed top-6 right-4 z-80 w-full max-w-sm space-y-3">
			<div className="flex gap-2 flex-col items-center">
				{alerts.map(alert => (
					<AlertItem key={alert.id} alert={alert} onClose={removeAlert} />
				))}
			</div>
		</div>
	);
}
