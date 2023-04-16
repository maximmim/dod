import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Image } from 'react-native';
import axios from 'axios';
export default function Eror({navigation}) {
  const loadscene = () => {
    navigation.navigate('Головна')
    
  }
  async function deleteAllItems() {
    try {
      const response = await axios.get("https://63ff8f4f63e89b09139eef52.mockapi.io/item");
      const items = response.data;
  
      await Promise.all(items.map((item) => axios.delete(`https://63ff8f4f63e89b09139eef52.mockapi.io/item/${item.id}`)));
      console.log("All items deleted successfully!");
    } catch (error) {
      console.error(error);
      
    }
  }  

  var isResizeble = false;

if(!isResizeble) {
 // Ваша ф-ция которая что то делает, отработает 1 раз и все
deleteAllItems()
isRezeble = true;
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
