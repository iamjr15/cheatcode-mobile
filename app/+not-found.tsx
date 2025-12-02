import { useEffect } from 'react';
import { router } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

export default function NotFoundScreen() {
  // Auto-redirect to home - handles hot reload route confusion
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/');
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
