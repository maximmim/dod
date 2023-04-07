import styled from 'styled-components/native'
import { gstyles } from '../gstyle';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { 
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageComponent,
  FlatList
} from 'react-native';





export default function Dext() {
  const route = useRoute();
  const data = route.params.text;
    const loadscene = () => {
        navigation.navigate('Головна')
        
      }


return (
    <View>
<Text style={gstyles.tect}>{data}</Text>
    </View>
)



}