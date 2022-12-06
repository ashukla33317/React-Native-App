import { View, Text, StatusBar, TouchableWithoutFeedback,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const PopUpData = () => {
  return (
    <StatusBar barStyle="dark-content">
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback>
                <Text style={style.textsize}>ShowPopUP</Text>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    </StatusBar>
  )
}

const styles=StyleSheet.create({
    conatainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    textsize:{
        fontSize:20
    }
})

export default PopUpData