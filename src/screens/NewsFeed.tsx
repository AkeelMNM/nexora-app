import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigation/RootStackParamsList';

type NewsFeedScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamsList,
	'Login'
>;

function NewsFeed() {}

export default NewsFeed;
