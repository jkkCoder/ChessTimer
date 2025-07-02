import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
// import clockIcon from "../../assets/svg/main-screen-clock.svg

const Home = ({ route }: any) => {

  const navigation = useNavigation<any>();

  const { displayString = '', time = 0, incrementalValue = 0 } = route.params || {};

  console.log({displayString, time, incrementalValue});

  // const [playerOneTime, setPlayerOneTime] = useState()

  return (
  <View style={styles.mainTimerScreenContainer}>
    <View style={styles.timerContainerOne}>
        <Text style={styles.playerNameText}>Player 1</Text>
        <Text style={styles.playerTimer}>10:00</Text>
        <View style={styles.movesCountTextContainer}>
          <Text style={styles.movesTextLabel}>Moves</Text>
          <Text style={styles.movesTextValue}>: 0</Text>
        </View>
        <View style={styles.pebbleTimeContainer}>
          {/* <clockIcon /> */}
          <Text style={styles.pebbleTime}>10 mins</Text>
        </View>
    </View>
    <View style={styles.chessPlayerControls}>
      {/* <Text>Here the chess timer controls should be present</Text> */}
    </View>
    <View style={styles.timerContainerTwo}>
        <Text style={styles.playerNameText}>Player 2</Text>
        <Text style={styles.playerTimer}>10:00</Text>
        <View style={styles.movesCountTextContainer}>
          <Text style={styles.movesTextLabel}>Moves</Text>
          <Text style={styles.movesTextValue}>: 0</Text>
        </View>
        <View style={styles.pebbleTimeContainer}>
          {/* <clockIcon /> */}
          <Text style={styles.pebbleTime}>10 mins</Text>
        </View>
    </View>
  </View>
  )
}

export default Home


// .container {
//   position: absolute; 
//   top: 208px; 
//   left: 150px; 
//   width: 87px; 
//   height: 30px; 
//   background: #37415133; 
//   border-radius: 9999px; 
//   border-width: 1px; 
//   border-color: #3741514D; 
//   border-style: solid; 
// }