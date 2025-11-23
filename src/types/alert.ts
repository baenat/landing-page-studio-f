type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
	id: string;
	type: AlertType;
	title: string;
	message?: string;
	duration?: number;
}

export interface AlertContextType {
	alerts: Alert[];
	showAlert: (alert: Omit<Alert, 'id'>) => void;
	removeAlert: (id: string) => void;
	success: (title: string, message?: string) => void;
	error: (title: string, message?: string) => void;
	warning: (title: string, message?: string) => void;
	info: (title: string, message?: string) => void;
}

export interface AlertItemProps {
	alert: Alert;
	onClose: (id: string) => void;
}
