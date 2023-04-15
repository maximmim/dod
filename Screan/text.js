import styled from 'styled-components/native'
import { gstyles } from '../gstyle';
import { useState,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { 
  View,
  Text,
} from 'react-native';





export default function Dext() {
  const navigation = useNavigation()
  useEffect(f,[])
  function f() {
    navigation.setOptions({ title: autor })
  }
  const route = useRoute();
  const data = route.params.text;
  const autor = route.params.name;
    const loadscene = () => {
        navigation.navigate('Головна')
        
      }


return (
    <View>

<Text style={gstyles.tect}>{data}</Text>
    </View>
)



}