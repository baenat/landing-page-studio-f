import React, { useCallback, useEffect, useState } from 'react';
import { AlertContext } from '../../contexts/AlertContext';
import type { Alert } from '../../types/alert';

export function AlertProvider({ children }: { children: React.ReactNode }) {
	const [alerts, setAlerts] = useState<Alert[]>([]);

	const showAlert = useCallback((alert: Omit<Alert, 'id'>) => {
		const id = `alert-${Date.now()}-${Math.random()}`;
		const newAlert: Alert = { ...alert, id, duration: alert.duration ?? 5000 };
		setAlerts(prev => [...prev, newAlert]);
	}, []);

	const removeAlert = useCallback((id: string) => {
		setAlerts(prev => prev.filter(alert => alert.id !== id));
	}, []);

	useEffect(() => {
		if (alerts.length === 0) return;

		setTimeout(() => {
			removeAlert(alerts[0].id);
		}, 3000);
	}, [alerts, removeAlert]);

	const success = useCallback((title: string, message?: string) => showAlert({ type: 'success', title, message }), [showAlert]);
	const error = useCallback((title: string, message?: string) => showAlert({ type: 'error', title, message }), [showAlert]);
	const warning = useCallback((title: string, message?: string) => showAlert({ type: 'warning', title, message }), [showAlert]);
	const info = useCallback((title: string, message?: string) => showAlert({ type: 'info', title, message }), [showAlert]);

	return (
		<AlertContext.Provider value={{ alerts, showAlert, removeAlert, success, error, warning, info }}>
			{children}
		</AlertContext.Provider>
	);
}
