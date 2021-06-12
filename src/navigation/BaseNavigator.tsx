import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import React from "react";
import "react-native";
import About from "screens/About";
import Home from "screens/Home";
import Portfolio from "screens/Portfolio";
import Services from "screens/Services";
import Skills from "screens/Skills";
import Testimonials from "screens/Testimonials";
import {ROUTES} from "./constants";

export const BaseNavigator = ({theme}: {theme: Theme}) => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{...TransitionScreenOptions, headerShown: false}}>
        <Stack.Screen name={ROUTES.Home} component={Home} />
        <Stack.Screen name={ROUTES.About} component={About} />
        <Stack.Screen name={ROUTES.Portfolio} component={Portfolio} />
        <Stack.Screen name={ROUTES.Services} component={Services} />
        <Stack.Screen name={ROUTES.Skills} component={Skills} />
        <Stack.Screen name={ROUTES.Testimonials} component={Testimonials} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
