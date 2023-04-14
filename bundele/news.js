import styled from 'styled-components/native'
import { gstyles } from '../gstyle';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageComponent,
  TouchableOpacity
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
  


export default function Mainstack({text,top,data,name}) {
const navigation = useNavigation()
    const loadscenestore = () => {
        navigation.navigate('Поточна Стаття')
      }


      function dw(name) {
navigation.navigate('Dext', { text})

      }


      const Post = styled.View`
    

    max-height: 150px;

    left: 4px;
    width: 408px;
    height:100px;
    border-radius: 9px;
    border:
    2px       /* width */
    solid     /* style */
    rgb(0, 0, 0);  /* color */
    background: rgb(229, 229, 229);
    background-size: 320px 347px;
    
`;
const PostText = styled.Text`
    top:30px
    left: 100px;
    height:100px;
    width:310px
    fontSize:20px;
    max-width: 100%
    
`;
const PostTextd = styled.Text`
    top:30px
    left: 30px;
    height:100px;
    width:310px
    fontSize:20px;
    max-width: 100%

`;


    return (

        
    <View>
        
<TouchableOpacity onPress={dw}>

<Post style={top}>

<PostText>{text}</PostText>
<PostTextd>{name}</PostTextd>
</Post>
</TouchableOpacity>
    </View>
    )
}