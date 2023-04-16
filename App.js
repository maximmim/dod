import Ionic from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Screan/main';
import Post from './Screan/map';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon: ({focused,size,colur}) => {
          let iconName;
          if(route.name ==="Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          }
          else if(route.name ==="Post") {
            iconName = focused ? "ios-send" : "ios-send-outline";
          }
          return <Ionic name={iconName} size={size} colour={colur}/>
        },
      })}>
        <Tab.Screen name='Home' component={Main}/>
        <Tab.Screen name='Post' component={Post}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



