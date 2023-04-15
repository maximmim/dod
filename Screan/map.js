import axios from 'axios';
import styled from 'styled-components-native';
import {gstyles} from "../gstyle"
import { useState,useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { 
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageComponent,
  TouchableOpacity,
  Image

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//write code for open changing in local for expo
// збереження даних
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
  




export default function Post({navigation}) {
  const [inputValue, setInputValue] = useState('');
  const [nickname, setnickname] = useState('');
  const [fes, sef] = useState('');
  //clearAllData()

function es() {
  saveData("nick",nickname);
}

  const loadscene = () => {
    navigation.navigate('Стаття')
    
  }
function postdate() {
  
  
  getData("nick").then(data => {

 
  var date = new Date();
  navigation.navigate('Головна')
    axios.post('https://63ff8f4f63e89b09139eef52.mockapi.io/item', {
      text: inputValue,
      nick: data
      //data:date.getHours()+":"+date.getMinutes()
    })
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please resubmit to the server")
        console.error(error);
      }); })
}

getData("nick").then(data => {
sef(data)
})

  return (
    <View>

      <TextInput
        style={gstyles.input}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <View>






      {
  fes == undefined && (
      <TextInput
        style={gstyles.inputnik}
        value={nickname}
        onBlur={es}
        onChangeText={text => { setnickname(text)}}
      />
      )

  


    }</View>



<TouchableOpacity  style={gstyles.button} onPress={postdate} >
  <Text style={gstyles.button_text} >Запостити</Text>
</TouchableOpacity>
    
    </View>
  );
}

