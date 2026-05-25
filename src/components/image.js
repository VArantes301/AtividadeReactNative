import { View, Image, StyleSheet } from 'react-native';
import postinho from '../../assets/postinho.png';

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image source={postinho} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  imagem: {
    width: '80%',
    height: 200,  
    borderRadius: 12, 
    resizeMode: 'cover',
  },
});
