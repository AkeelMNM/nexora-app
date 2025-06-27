import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

type CreateAccountScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'CreateAccount'
>;

function CreateAccount() {
	const navigation = useNavigation<CreateAccountScreenNavigationProp>();
	return <View></View>;
}

export default CreateAccount;
