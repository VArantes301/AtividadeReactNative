import { TextInput, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { COLOR_1, COLOR_2, COLOR_I, COLOR_BL } from '../constants/color';

export default function Input({ valor, setValor, placeholder }) {
  const [focado, setFocado] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, focado && styles.inputFocado]}
        placeholder={placeholder}
        placeholderTextColor={COLOR_I}
        keyboardType='numeric'
        value={valor}
        onChangeText={setValor}
        onFocus={() => setFocado(true)}
        onBlur={() => setFocado(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '85%',
    marginVertical: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: COLOR_1,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: COLOR_BL,
    textAlign: 'center',
  },
  inputFocado: {
    borderColor: COLOR_2,
  },
});
