import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { COLOR_1, COLOR_2 } from '../constants/color';

export default function Title({ text }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: COLOR_1,
    paddingVertical: 32,
    alignItems: 'center',
  },
  text: {
    color: COLOR_2,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
