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





export default function Post({navigation}) {
  const [inputValue, setInputValue] = useState('');





  const loadscene = () => {
    navigation.navigate('Стаття')
    
  }
function postdate() {
  var date = new Date();
  
    axios.post('https://63ff8f4f63e89b09139eef52.mockapi.io/item', {
      text: inputValue,
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
      });
}



  return (
    <View>

      <TextInput
        style={gstyles.input}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
<TouchableOpacity  style={gstyles.button} onPress={postdate} >
  <Text style={gstyles.button_text} >Запостити</Text>
</TouchableOpacity>
    
    </View>
  );
}

