import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Movies_rating from './MoviesRating';
import MoviesRating from './MoviesRating';

const UserData = () => {

  const [data,setData]=useState("");
  const apiData= async ()=>{
  try {
  const  Response=await fetch("https://thapatechnical.github.io/userapi/users.json");
 const myData=await Response.json()
    console.log(myData)
    setData(myData)
  } catch (error) {
    console.log("error")
  }
  };

  useEffect(()=>{
    apiData()
  },[])


  return (
    // <View>
    //   <Text>UserData</Text>
    //   <FlatList data={data} renderItem={({item})=>{
    //     return(
    //       <View>
    //         <Text>{item.id}</Text>
    //         <Text>{item.name}</Text>
    //       </View>
    //     )
    //   }}/>
    // </View>
    <MoviesRating/>
  )
}

export default UserData

const styles = StyleSheet.create({})