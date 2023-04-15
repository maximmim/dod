import React from "react";
import Main from "./Screan/main";
import Login from "./Screan/login";
import Post from "./Screan/map";
import Eror from "./Screan/Eror";
import Dext from "./Screan/text";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mainstack from "./bundele/news";
import sendPushNotification from "./Screan/noti"
import { gstyles } from "./gstyle";
const Stack = createStackNavigator();



export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>                
            
            <Stack.Screen
            name="Головна"
            component={Main}
            optsions={{title:"Головна"}}
            />         
            <Stack.Screen
            name="Login"
            component={Login}
            optsions={{title:"Login"}}
            />                    
           <Stack.Screen
            name="Dext"
            component={Dext}
            optsions={{title:"Dext"}}
            />
            <Stack.Screen
            name="main"
            component={Mainstack}
            optsions={{title:"main"}}
            />
            <Stack.Screen
            name="Eror"
            component={Eror}
            optsions={{title:"Eror"}}
            />
           <Stack.Screen
            name="Запостити"
            component={Post}
            optsions={{title:"Запостити"}}
            />
                       <Stack.Screen
            name="noti"
            component={sendPushNotification}
            optsions={{title:"noti" }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

