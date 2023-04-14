import axios from 'axios';
import styled from 'styled-components-native';
import { useRoute } from '@react-navigation/native';
import Mainstack from '../bundele/news';
import {gstyles} from "../gstyle"
import { useState,useEffect } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageComponent,
  TouchableOpacity,
  Image,
  FlatList,
  Vibration

} from 'react-native';
import { RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Помилка збереження даних локально:', error);
  }
};
// отримання даних
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
         return value;
    }
  } catch (error) {
    console.error('Помилка отримання даних локально:', error);
  }
};
// видалення даних
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Помилка видалення даних локально:', error);
  }
};
// очищення всього локального сховища
const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Помилка очищення локального сховища:', error);
  }
};

export default function Main({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [Eror, setEror] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);
  useEffect(getdate, []);


  //alert(route.params.name)

    function da() {
      Vibration.vibrate(1000)
      getdate()
    }

  const loadscene = () => {
    Vibration.vibrate(1000)
    Vibration.cancel()
    Vibration.vibrate(1000)
    navigation.navigate('Запостити')
    
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

      
    //TypeError: Cannot read property 'tex' of undefined react native useRoute()
      // i use use Route for navigation what this error TypeError: Cannot read property 'value' of undefined
    
     
      

   
      


//напиши скрипт для удаления всех значений с https://63ff8f4f63e89b09139eef52.mockapi.io/item с помощу axios react native
function getdate() { 

//navigation.navigate("Login")







setisLoading(true)

     axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/item')
      .then(response => {
        // Handle the response data
        setItems(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please a reconnect to server")
        console.error(error);
      }).finally(()=> {
        setisLoading(false);  
}
        )
      axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/Eror')
      .then(response => {
        // Handle the response data
        setEror(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please a reconnect to server")
        console.error(error);
      });



}
           setInterval(() => {
              Eror.map(item => {
        if (item.Eror=="1") {
          
          navigation.navigate('Eror')
        }
      })
      }, 1); 




  return (
    <View>





      {/*items.map(item => (

        
        <Mainstack name={item.name} top={item.top}/>

      ))*/}


{
/*
refreshControler={<RefreshControl refreshing={isLoading} onRefresh={getdate} />}
*/
}
{/* */ }

<FlatList



        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={da} />
        }


data={items}
renderItem={({item})=>(


<Mainstack text={item.text}/>
  
)}


/>








<TouchableOpacity
          style={gstyles.button_home}
          onPress={da}
>
<Image style={gstyles.button_home} source={require('../assets/refresh.png')} />
          
</TouchableOpacity>




<TouchableOpacity
          style={gstyles.button_add}
          onPress={loadscene}        
>
<Image style={gstyles.button_add} source={require('../assets/add.png')} />
          
</TouchableOpacity>

<TouchableOpacity
          style={gstyles.button_end}
          onPress={deleteAllItems}        
>
<Image style={gstyles.button_end} source={require('../assets/end.png')} />
          
</TouchableOpacity>

    </View>
  );
}
