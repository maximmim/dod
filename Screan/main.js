import axios from 'axios';
import styled from 'styled-components-native';
import { useRoute } from '@react-navigation/native';
import Mainstack from '../bundele/news';
import {gstyles} from "../gstyle"
import { useState,useEffect, useRef} from 'react';
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
  Vibration,
  NavigationContainer,
  ScrollView

} from 'react-native';
import { RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keyboard } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  /*
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
*/
export default function Main() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [Eror, setEror] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [refreshing, setRefreshing] = useState(false);
  const [nomerdata, setdata] = useState();


  useEffect(() => {
    getdate()
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

var tokens = ["ExponentPushToken[EBiZsTOfFwMEw2fVrt-qy2]","ExponentPushToken[oay4zwB-LMniJnpssCCOKB]"]

  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',

    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };


//sendPushNotification(message)  

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(msg) {


  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msg),
  });
}





async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      //alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    //alert('Must use physical device for Push Notifications');
    Vibration.vibrate(1000)
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}




























  //alert(route.params.name)

    function da() {
      Vibration.vibrate(1000)
      getdate()
    }

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

      
    //TypeError: Cannot read property 'tex' of undefined react native useRoute()
      // i use use Route for navigation what this error TypeError: Cannot read property 'value' of undefined

      
      
async function getCount() {
  try {
    const response = await axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/item');
    const count = response.data.length;
    console.log(`Количество объектов на сервере: ${count}`);
  } catch (error) {
    console.error(error);
    Vibration.vibrate(1000)
  }
}



//Напиши функцию для отаравки hello world через push увидомления expo  

//напиши скрипт для удаления всех значений с https://63ff8f4f63e89b09139eef52.mockapi.io/item с помощу axios react native
function getdate() { 
 getCount(); 

items.map(item=> {
const gid = item.id
})

//sendPushNotification(message) 



setisLoading(true)

     axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/item')
      .then(response => {
        // Handle the response data
        setdata(response.data.length)
        setItems(response.data);
      })
      .catch(error => {
        // Handle any errors
        Alert.alert("Eror 404","Please a reconnect to server")
        console.error(error);
        Vibration.vibrate(1000)
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
        Vibration.vibrate(1000)
        // Handle any errors
        Alert.alert("Eror 404","Please a reconnect to server")
        console.error(error);
      });



}
           setInterval(() => {
              Eror.map(item => {
        if (item.Eror=="1") {
          //Vibration.vibrate(1000)
          navigation.navigate('Eror')


          
        }
      })
      }, 1); 

      var Tab = createBottomTabNavigator()




  return (
  <ScrollView
  
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={da} />
  }
  
  
  >

    









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






data={items}
renderItem={({item})=>(


<Mainstack text={item.text} name={item.nick}/>
  
)}


/>






{/*

<TouchableOpacity
          style={gstyles.button_hom}
          onPress={da}
>
<Image style={gstyles.button_home} source={require('../assets/refresh.png')} />
          
</TouchableOpacity>




<TouchableOpacity
          style={gstyles.button_ad}
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

*/}

</ScrollView>
  
  );
}
