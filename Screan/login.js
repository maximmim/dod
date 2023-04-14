import axios from 'axios';
import styled from 'styled-components-native';
import {gstyles} from "../gstyle"
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
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





export default function Login() {
  const navigation = useNavigation()
  //clearAllData()
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  
  useEffect(positio,[])

  const loadscene = () => {
    getData("name").then((name) => {

      
    navigation.navigate('Головна',{ name})
    
    })
  }
  
async function position() 
{



  saveData("yyy","true")
  saveData("name",inputValue)
  loadscene()




}



function positio() 
{



getData("yyy").then((value) => {
if(value === "true") {
loadscene()
}
})




}
 

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
