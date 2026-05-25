import { View, Text, StyleSheet } from 'react-native';
import { COLOR_1, COLOR_BL } from '../constants/color';

export default function ResultCard({ resultado, precoEtanol, precoGasolina }) {
  if (!resultado) return null;

  let mensagem = '';
  if (resultado === 'etanol') {
    mensagem = 'Etanol compensa mais!';
  } else {
    mensagem = 'Gasolina compensa mais!';
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Resultado</Text>
      <Text style={styles.item}>Etanol: R$ {parseFloat(precoEtanol).toFixed(2)}</Text>
      <Text style={styles.item}>Gasolina: R$ {parseFloat(precoGasolina).toFixed(2)}</Text>
      <Text style={styles.destaque}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '85%',
    borderWidth: 2,
    borderColor: COLOR_1,
    borderRadius: 4,
    backgroundColor: COLOR_BL,
    padding: 16,
    gap: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    textAlign: 'center',
  },
  destaque: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR_1,
    textAlign: 'center',
    marginTop: 4,
  },
});
