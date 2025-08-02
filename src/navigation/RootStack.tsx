import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import { RootStackParamsList } from './RootStackParamsList';
import NewsFeed from '../screens/NewsFeed';
import CreateAccount from '../screens/CreateAccount';
import { useThemeColor } from '../assets/theme/ThemeContext';
import OtpScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function RootStack() {
	const theme = useThemeColor();

	const headerOptions = {
		headerStyle: {
			backgroundColor: theme('header_primary'),
		},
		headerTitleStyle: {
			color: theme('text_primary'),
		},
		headerTintColor: theme('icon_primary'),
	};

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="NewsFeed" component={NewsFeed} />
			<Stack.Screen
				name="CreateAccount"
				component={CreateAccount}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="OtpScreen"
				component={OtpScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

export default RootStack;
