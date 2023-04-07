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





export default function Mainstack({text,top,data}) {
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

</Post>
</TouchableOpacity>
    </View>
    )
}