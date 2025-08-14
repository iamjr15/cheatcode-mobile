import * as SecureStore from 'expo-secure-store';

export type StorageValue = string | null;

export async function setItemAsync(key: string, value: string): Promise<void> {
	await SecureStore.setItemAsync(key, value, {
		keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
	});
}

export async function getItemAsync(key: string): Promise<StorageValue> {
	try {
		const value = await SecureStore.getItemAsync(key);
		return value ?? null;
	} catch (error) {
		return null;
	}
}

export async function removeItemAsync(key: string): Promise<void> {
	await SecureStore.deleteItemAsync(key);
}

export async function setJSONAsync<T>(key: string, data: T): Promise<void> {
	await setItemAsync(key, JSON.stringify(data));
}

export async function getJSONAsync<T>(key: string): Promise<T | null> {
	const raw = await getItemAsync(key);
	if (!raw) return null;
	try {
		return JSON.parse(raw) as T;
	} catch {
		return null;
	}
}

