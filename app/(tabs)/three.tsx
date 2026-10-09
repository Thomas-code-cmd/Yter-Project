import { StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      <Button title="Ouvrir mon modal" onPress={() => router.push('/mymodal')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});