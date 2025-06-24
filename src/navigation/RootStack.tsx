import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import { RootStackParamsList } from './RootStackParamsList';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
}

export default RootStack;
