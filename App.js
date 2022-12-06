import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Apps/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './Apps/About';
import Course from './Apps/Course';
import ContactUs from './Apps/ContactUs';
import UserData from './Apps/UserData';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen name="Home" 
        options={
          {
            headerShown:false
          }}>
         { (props)=><Home {...props} ChannelName={" Educational App Store"}/>}
        </Stack.Screen>
        <Stack.Screen name="about" component={About}  options={
          {
            headerBackTitleStyle:{
              fontSize:50
            },
            headerTitle:"About",
            headerTitleAlign:"center"
          }
        }/>
        <Stack.Screen name="course" component={Course} 
        options={
          {
            headerBackTitleStyle:{
              fontSize:50
            },
            headerTitle:"Courses",
            headerTitleAlign:"center"
          }
        }
        />
        <Stack.Screen name="userdata" component={UserData} 
        options={
          {
            headerBackTitleStyle:{
              fontSize:50
            },
            headerTitle:"Student Data",
            headerTitleAlign:"center"
          }
        }
        />
        <Stack.Screen name="contact" component={ContactUs} 
        options={
          {
            headerBackTitleStyle:{
              fontSize:50
            },
            headerTitle:"Contact",
            headerTitleAlign:"center"
          }
        }
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})