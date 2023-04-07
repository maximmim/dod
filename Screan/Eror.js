import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Image } from 'react-native';

export default function Eror({navigation}) {
  const loadscene = () => {
    navigation.navigate('Головна')
    
  }
  return (
    <View style={styles.container}>
    <Image source={require('../assets/Eror.png')} />
    <Text>Технічні проблеми😑</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
