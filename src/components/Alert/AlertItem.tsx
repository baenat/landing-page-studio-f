import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react";
import { useState } from "react";
import type { AlertItemProps } from "../../types/alert";

export function AlertItem({ alert, onClose }: AlertItemProps) {
	const [isExiting, setIsExiting] = useState(false);

	const handleClose = () => {
		setIsExiting(true);
		setTimeout(() => onClose(alert.id), 300);
	};

	// Configuración por tipo de alerta
	const config = {
		success: {
			icon: CheckCircle,
			bgColor: 'bg-white',
			borderColor: 'border-amber-900',
			iconColor: 'text-amber-900',
			titleColor: 'text-amber-900',
			messageColor: 'text-black'
		},
		error: {
			icon: AlertCircle,
			bgColor: 'bg-red-50',
			borderColor: 'border-red-500',
			iconColor: 'text-red-500',
			titleColor: 'text-red-900',
			messageColor: 'text-red-700'
		},
		warning: {
			icon: AlertTriangle,
			bgColor: 'bg-yellow-50',
			borderColor: 'border-yellow-500',
			iconColor: 'text-yellow-500',
			titleColor: 'text-yellow-900',
			messageColor: 'text-yellow-700'
		},
		info: {
			icon: Info,
			bgColor: 'bg-blue-50',
			borderColor: 'border-blue-500',
			iconColor: 'text-blue-500',
			titleColor: 'text-blue-900',
			messageColor: 'text-blue-700'
		}
	};

	const style = config[alert.type];
	const Icon = style.icon;

	return (
		<div
			className={`w-[40vh] ${style.bgColor} ${style.borderColor} border-l-4 p-4 rounded-lg shadow-lg transition-all duration-300 ${isExiting ? 'animate-slide-out opacity-0' : 'animate-slide-in'
				}`}
		>
			<div className="flex items-center">
				{/* Icon */}
				<div className="shrink-0">
					<Icon className={`w-10 h-10 ${style.iconColor}`} />
				</div>

				{/* Content */}
				<div className="ml-4 flex-1">
					<h3 className={`text-sm font-semibold ${style.titleColor}`}>
						{alert.title}
					</h3>
					{alert.message && (
						<p className={`text-sm mt-1 ${style.messageColor}`}>
							{alert.message}
						</p>
					)}
				</div>

				{/* Close Button */}
				<button
					onClick={handleClose}
					className={`shrink-0 ml-4 cursor-pointer ${style.iconColor} hover:opacity-70 transition-opacity`}
					aria-label="Cerrar"
				>
					<X className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
}