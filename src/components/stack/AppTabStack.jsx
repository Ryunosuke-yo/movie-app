import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from "../screens/tabs/MoviesScreen";
import SearchResultScreen from "../screens/tabs/SearchResultScreen";
import TvScreen from "../screens/tabs/TvScreen.jsx";



const Tab = createMaterialTopTabNavigator()


export default function(){
  
    return (
      <Tab.Navigator>
        <Tab.Screen name="Movies" component={MoviesScreen} />
        <Tab.Screen name="Search result" component={SearchResultScreen} />
        <Tab.Screen name="TV shows" component={TvScreen} />
      </Tab.Navigator>
    )
}