import axios from 'axios';
import styled from 'styled-components-native';
import {gstyles} from "../gstyle"
import { useState,useEffect } from 'react';
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





export default function Login({navigation}) {
  
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  
 
  const loadscene = () => {
    navigation.navigate('Головна')
    
  }
  
  async function position() {

      axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/Eror')
      .then(response => {
        // Handle the response data
        setItems(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please a reconnect to server")
        console.error(error);
      });




    items.map(item  =>{

getData('name').then((value) => {
  if(item.nameacaunt == value) {
      navigation.navigate("Головна")
    }


else {
  saveData("name",inputValue)
    axios.post('https://63ff8f4f63e89b09139eef52.mockapi.io/Eror', {
      nameacaunt: inputValue,
    })
      .then(response => {
        // Handle the response data
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please resubmit to the server")
        console.error(error);
      });} }) })
  }


  


useEffect(()=>{
      axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/Eror')
      .then(response => {
        // Handle the response data
        setItems(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please a reconnect to server")
        console.error(error);
      });

    items.map(item  =>{
getData('name').then((value) => {
      if(item.nameacaunt == value) {
        navigation.navigate("Головна")
      }
  }) })
},[])



 

  return (
    <View>
    <TouchableOpacity  style={gstyles.buttonn} onPress={position} >
  <Text style={gstyles.button_text} >Submit</Text>
</TouchableOpacity>
    <Text style={gstyles.tes}>Ведіть ваше ім`я</Text>
    <TextInput
        style={gstyles.input}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
    
    </View>
  );
}
