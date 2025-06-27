import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';
import { View } from 'react-native';

type NewsFeedScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'NewsFeed'
>;

function NewsFeed() {
	return <View></View>;
}

export default NewsFeed;
