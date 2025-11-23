import { createContext, useContext } from 'react';
import type { AlertContextType } from '../types/alert';

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) throw new Error('useAlert debe usarse dentro de AlertProvider');
  return context;
}
