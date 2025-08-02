import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './assets/theme/ThemeContext';
import { StatusBar, useColorScheme } from 'react-native';

function App() {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		flex: 1,
		backgroundColor: isDarkMode ? 'black' : 'white',
	};
	return (
		<SafeAreaProvider style={backgroundStyle}>
			<NavigationContainer>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				/>
				<ThemeProvider>
					<RootStack />
				</ThemeProvider>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
