import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation<any>()
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