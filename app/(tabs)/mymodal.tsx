import { StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function MyModal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ceci est mon modal</Text>
      <Button title="Fermer" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});