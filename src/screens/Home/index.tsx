import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, Pressable, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import moment from 'moment';
import ConfirmationPopUp from '../../components/ConfirmationPopUp';

const Home = ({ route }: any) => {

  const navigation = useNavigation<any>();

  // destructuring selected values from Time Pill Selection Screen :
  const { displayString = '', time = 0, incrementalValue = 0 } = route.params || {};

  // Format "seconds" to "Minute : Seconds" format :
  const formatDuration = (seconds: number | undefined | null): string => {

    if (typeof seconds !== 'number' || isNaN(seconds)) {
      return '00:00';
    }

    if (seconds <= 0) {
      return '00:00';
    }

    return moment.utc(seconds * 1000).format('mm:ss');
  };

  // States :
  // Active player state
  const [activePlayer, setActivePlayer] = useState<string>("");

  // Time Up color state :
  const [timeUpColor, setTimeUpColor] = useState<string>("")

  // Player One states :
  const [playerOneTime, setPlayerOneTime] = useState(time)
  const [playerOneMoveCount, setPlayerOneMoveCount] = useState<number>(0)

    console.log(formatDuration(playerOneTime))

  // Player Two states :
  const [playerTwoTime, setPlayerTwoTime] = useState(time)
  const [playerTwoMoveCount, setPlayerTwoMoveCount] = useState<number>(0)

  // Game status state :
  const [gameStatus, setGameStatus] = useState<'initial' | 'playing' | 'paused' | 'finished'>('initial')

  // Last active player before pause:
  const [lastActivePlayerBeforePause, setLastActivePlayerBeforePause] = useState<string>('');

  // Audio state :
  const [enableAudio, setEnableAudio] = useState<boolean>(true);

  // Confirmation popup visibility state :
  const [isConfirmationPopUpVisible, setIsConfirmationPopUpVisible] = useState<boolean>(false);

  // Player One Effect :
  useEffect(() => {
    let firstPlayerTimer: any = null;
    if (activePlayer === "playerOne" && playerOneTime > 0 && gameStatus === 'playing') {
      firstPlayerTimer = setInterval(() => {
        setPlayerOneTime((prev: number) => prev - 1)
      }, 1000);
    } else if (playerOneTime <= 0 && gameStatus !== 'finished') {
       setTimeUpColor("red");
       setActivePlayer("");
       setGameStatus("finished");
       clearInterval(firstPlayerTimer);
    }
    return () => firstPlayerTimer && clearInterval(firstPlayerTimer!)
  }, [activePlayer, playerOneTime, gameStatus])

  // Player Two Effect :
  useEffect(() => {
    let secondPlayerTimer: any = null;
    if (activePlayer === "playerTwo" && playerTwoTime > 0 && gameStatus === 'playing') {
      secondPlayerTimer = setInterval(() => {
        setPlayerTwoTime((prev: number) => prev - 1)
      }, 1000);
    } else if (playerTwoTime <= 0 && gameStatus !== 'finished') {
      setTimeUpColor("red");
      setActivePlayer("");
      setGameStatus('finished');
      clearInterval(secondPlayerTimer);
    }
    return () => secondPlayerTimer && clearInterval(secondPlayerTimer!)
  }, [activePlayer, playerTwoTime, gameStatus])


  // Refs of Player 1, Player 2 Sections :
  const playerTwoRef = useRef(null)
  const playerOneRef = useRef(null)

  // Player One onPress function :
  const handlePlayerOneCTA = useCallback(() => {
    if(gameStatus === "finished") setIsConfirmationPopUpVisible(true)
    if(gameStatus !== 'playing') {
      setGameStatus('playing');
    }
    setPlayerOneMoveCount((prev: number) => prev + 1);
    setPlayerOneTime((prev: number) => prev + incrementalValue);
    if (activePlayer === "" || activePlayer === "playerOne") {
      setActivePlayer("playerTwo")
    }
  }, [activePlayer, incrementalValue, gameStatus, playerOneTime])

  // Player Two onPress function :
  const handlePlayerTwoCTA = useCallback(() => {
    if(gameStatus === "finished") setIsConfirmationPopUpVisible(true)
    if (gameStatus !== 'playing') {
      setGameStatus('playing');
    }
    setPlayerTwoMoveCount((prev: number) => prev + 1);
    setPlayerTwoTime((prev: number) => prev + incrementalValue);
    if (activePlayer === "" || activePlayer === "playerTwo") {
      setActivePlayer("playerOne")
    }
  }, [activePlayer, incrementalValue, gameStatus, playerTwoTime])

  const handleOnSuccessConfirmationCB = () => {
    setIsConfirmationPopUpVisible(false);
    setActivePlayer("");
    setLastActivePlayerBeforePause("");
    setPlayerOneTime(time);
    setPlayerTwoTime(time);
    setPlayerOneMoveCount(0);
    setPlayerTwoMoveCount(0);
    setTimeUpColor("");
    setGameStatus('initial');
  }

  const handleOnCancelConfirmationCB = () => {
    setGameStatus("playing");
    setIsConfirmationPopUpVisible(false);
    setActivePlayer(lastActivePlayerBeforePause);
  }

  const handleResetControl = () => {
    setLastActivePlayerBeforePause(activePlayer);
    setGameStatus("paused");
    setActivePlayer("");
    setIsConfirmationPopUpVisible(true);
  }

  const handlePlayPauseGame = () => {
    if(gameStatus === "initial") {
      setActivePlayer("playerOne");
      setGameStatus('playing');
    }
    if(gameStatus === 'playing') {
      setGameStatus('paused');
      setLastActivePlayerBeforePause(activePlayer);
      setActivePlayer('');
    }
    if(gameStatus === 'paused') {
      setGameStatus('playing');
      setActivePlayer(lastActivePlayerBeforePause);
    }
  }

  const handleAudioControl = () => {
    setEnableAudio((prev : boolean) => !prev)
  }

  const handleNavigateToTimePillSelectionPage = () => {
    navigation.navigate('Timer');
  }

  return (
    <View style={styles.mainTimerScreenContainer}>
      {isConfirmationPopUpVisible ? <View style={styles.confirmationPopupParentContainer}>
        <ConfirmationPopUp
          key={"resetPopUp"}
          onPressSuccesCB={handleOnSuccessConfirmationCB}
          onPressCancelCB={handleOnCancelConfirmationCB}
        />
      </View> : <></>}
      <Pressable
        style={
          [
            styles.timerContainerOne, 
            (activePlayer === "playerOne") ? styles.activePlayerAreaColor : styles.inActivePlayerAreaColor,
            (playerOneTime <= 0) && { backgroundColor: timeUpColor }
          ]
        }
        ref={playerOneRef}
        onPress={handlePlayerOneCTA}
        disabled={activePlayer === "playerTwo" || gameStatus === "paused"}
      >
        <Text style={[styles.playerNameText, (playerOneTime <= 0) && {color: "#fff"}]}>Player 1</Text>
        <Text style={styles.playerTimer}>{formatDuration(playerOneTime)}</Text>
        <View style={styles.movesCountTextContainer}>
          <Text style={[styles.movesTextLabel, (playerOneTime <= 0) && {color: "#fff"}]}>Moves</Text>
          <Text style={[styles.movesTextValue, (playerOneTime <= 0) && {color: "#fff"}]}>: {playerOneMoveCount}</Text>
        </View>
        <View style={styles.pebbleTimeContainer}>
          {/* <clockIcon /> */}
          <Text style={styles.pebbleTime}>{displayString}</Text>
        </View>
      </Pressable>
      <View style={styles.chessPlayerControls}>
        <Pressable
          style={({ pressed }) => [
            styles.controlItem,
            pressed && { opacity: 0.7 }
          ]}
          onPress={handleResetControl}
          accessibilityLabel="Reset game"
        >
          <Text style={styles.controlTextStyle}>🔄</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.controlItem,
            pressed && { opacity: 0.7 }
          ]}
          onPress={handlePlayPauseGame}
          disabled={gameStatus === "finished"}
          accessibilityLabel={gameStatus === "playing" ? "Pause game" : "Play game"}
        >
          <Text style={styles.controlTextStyle}>
            {gameStatus === "playing" ? '⏸' : '▶️'}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.controlItem,
            pressed && { opacity: 0.7 }
          ]}
          onPress={handleAudioControl}
          accessibilityLabel={enableAudio ? "Disable audio" : "Enable audio"}
        >
          <Text style={styles.controlTextStyle}>
            {enableAudio ? "🔊" : "🔇"}
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.controlItem,
            pressed && { opacity: 0.7 }
          ]}
          onPress={handleNavigateToTimePillSelectionPage}
          accessibilityLabel="Change clock settings"
        >
          <Text style={styles.controlTextStyle}>⏰ </Text>
        </Pressable>
      </View>
      <Pressable
        style={
          [
            styles.timerContainerTwo, 
            (activePlayer === "playerTwo") ? styles.activePlayerAreaColor : styles.inActivePlayerAreaColor,
            (playerTwoTime <= 0) && { backgroundColor: timeUpColor }
          ]
        }
        ref={playerTwoRef}
        onPress={handlePlayerTwoCTA}
        disabled={activePlayer === "playerOne" || gameStatus === "paused"}
      >
        <Text style={[styles.playerNameText, (playerTwoTime <= 0) && {color: "#fff"}]}>Player 2</Text>
        <Text style={styles.playerTimer}>{formatDuration(playerTwoTime)}</Text>
        <View style={styles.movesCountTextContainer}>
          <Text style={[styles.movesTextLabel, (playerTwoTime <= 0) && {color: "#fff"}]}>Moves</Text>
          <Text style={[styles.movesTextValue, (playerTwoTime <= 0) && {color: "#fff"}]}>: {playerTwoMoveCount}</Text>
        </View>
        <View style={styles.pebbleTimeContainer}>
          {/* <clockIcon /> */}
          <Text style={styles.pebbleTime}>{displayString}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Home