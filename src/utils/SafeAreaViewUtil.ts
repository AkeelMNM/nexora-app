import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function useSafeAreaStyle(headerEnabled = false) {
	const insets = useSafeAreaInsets();

	if (headerEnabled) {
		return { paddingTop: insets.top, paddingBottom: insets.bottom };
	} else {
		return { paddingBottom: insets.bottom };
	}
}
