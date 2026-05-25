import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLOR_1, COLOR_BL, COLOR_2 } from '../constants/color';

export default function Botao({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignSelf: 'center',
    width: '85%',
    backgroundColor: COLOR_1,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  texto: {
    color: COLOR_2,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
