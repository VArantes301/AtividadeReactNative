import { ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import Title from '../components/title';
import Banner from '../components/image';
import Input from '../components/input';
import Botao from '../components/botao';
import ResultCard from '../components/resultCard';
import { COLOR_BG, COLOR_F } from '../constants/color';

export default function HomePage() {
  const [precoEtanol, setPrecoEtanol] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState(null);
  const [etanolFinal, setEtanolFinal] = useState('');
  const [gasolinaFinal, setGasolinaFinal] = useState('');

  function calcular() {
    const etanol = parseFloat(precoEtanol);
    const gasolina = parseFloat(precoGasolina);
    let compensa = "" 
    
    if (etanol / gasolina < 0.7) {
      compensa = "etanol"
    } else {
      compensa = "gasolina"
    }

    setEtanolFinal(precoEtanol)
    setGasolinaFinal(precoGasolina)
    setResultado(compensa);
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Title text="Posto de gasolina" />
      <Banner />
      <Input valor={precoEtanol} setValor={setPrecoEtanol} placeholder="Preço do Etanol" />
      <Input valor={precoGasolina} setValor={setPrecoGasolina} placeholder="Preço da Gasolina" />
      <Botao texto='Calcular' onPress={calcular} />
      <ResultCard resultado={resultado} precoEtanol={etanolFinal} precoGasolina={gasolinaFinal}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: COLOR_F,
  },
  container: {
    gap: 10,
    paddingBottom: 20,
  },
});
