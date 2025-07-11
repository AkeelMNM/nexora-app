import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './colors';

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeContext = createContext<string | null | undefined>(undefined);
const ThemeColorContext = createContext<(key: string) => string>(() => '');

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

export function useThemeColor() {
	const context = useContext(ThemeColorContext);
	if (!context) {
		throw new Error('useThemeColor must be used within a ThemeProvider');
	}
	return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const systemTheme = useColorScheme();

	function getTheme(key: string): string {
		return systemTheme === 'dark' ? darkTheme[key] : lightTheme[key];
	}

	return (
		<ThemeContext.Provider value={systemTheme}>
			<ThemeColorContext.Provider value={getTheme}>
				{children}
			</ThemeColorContext.Provider>
		</ThemeContext.Provider>
	);
}
