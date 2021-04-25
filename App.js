import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {  Shop, OrederDelivery} from './screens';
import Tabs from './navigation/tabs';
import Basket from './screens/Basket';
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Home"}
            >
            <Stack.Screen name="Home" component={Tabs}/>
            <Stack.Screen name="Shop" component={Shop}/>
            <Stack.Screen name="OrderDelivery" component={OrederDelivery}/>
            <Stack.Screen name="Basket" component={Basket}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;