import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import { RootStackParamsList } from './RootStackParamsList';
import NewsFeed from '../screens/NewsFeed';
import CreateAccount from '../screens/CreateAccount';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="NewsFeed" component={NewsFeed} />
			<Stack.Screen name="CreateAccount" component={CreateAccount} />
		</Stack.Navigator>
	);
}

export default RootStack;
