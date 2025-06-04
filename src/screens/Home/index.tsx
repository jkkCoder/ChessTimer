import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Home = ({ route }: any) => {

  const navigation = useNavigation<any>();

  const { displayString = '', time = 0, incrementalValue = 0 } = route.params || {};

  console.log({displayString, time, incrementalValue});

  return (
  <View>
    <Text>Home</Text>

    <Pressable onPress={() => navigation.navigate('Timer')}>
    <Text>Go to screen B</Text>
    </Pressable>
  </View>
  )
}

export default Home