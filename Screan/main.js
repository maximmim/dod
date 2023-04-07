import axios from 'axios';
import styled from 'styled-components-native';

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
  FlatList

} from 'react-native';
import { RefreshControl } from 'react-native';



export default function Main({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [Eror, setEror] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(getdate, []);

  const loadscene = () => {
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
        setisLoading(false);}
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


<FlatList



        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getdate} />
        }


data={items}
renderItem={({item})=>(

<Mainstack text={item.text}  
/>
)}

/>








<TouchableOpacity
          style={gstyles.button_home}
          onPress={getdate}
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
