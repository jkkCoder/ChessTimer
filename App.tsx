import { View, Text, SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Timer from './src/screens/Timer';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Timer',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Timer: Timer,
    Home: Home
  },
});

const Navigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
