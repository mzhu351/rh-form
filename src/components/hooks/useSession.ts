import { useState, useEffect } from "react";

const getStoredOrDefault = (key: string, defaultValue?: any) => {
	const stored = sessionStorage.getItem(key);
	if (!stored) {
		return defaultValue || null;
	}
	return JSON.parse(stored);
};

export const useSession = (key: string, defaultValue?: any) => {
	const [value, setValue] = useState(getStoredOrDefault(key, defaultValue));

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return {
		value,
		setValue,
	};
};
