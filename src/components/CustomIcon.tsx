import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomIconProps {
	name: string;
	size?: number;
	color?: string;
	style?: StyleProp<TextStyle>;
}

function CustomIcon({
	name,
	size = 24,
	color = '#000',
	style,
}: CustomIconProps) {
	return <Icon name={name} size={size} color={color} style={style} />;
}

export { CustomIcon };
