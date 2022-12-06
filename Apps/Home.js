import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Menu from './Menu';

const Home = (props) => {
    let data="Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.";
  return (
    
    <View style={styles.head}>
       <View style={styles.menus}>
          <Menu/>
          </View>
      
      <View style={styles.img}>
        <Image style={styles.img} source={{uri:"https://www.educationalappstore.com/images/best-apps-for-education.jpg"}}/>
      </View>

      <View style={styles.heads}>
        <Text style={styles.headline}>Welcome To <Text style={{color:"#6495ED"}}>{props.ChannelName}</Text></Text>
      </View>
      <View style={styles.heads}><Text style={styles.headlines}>{data}</Text></View>
   
   
    <View >
      <View style={styles.menus}>
          <Menu/>
          </View>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    head:{
  
    },
    img:{
      height:300,
      marginHorizontal:20,
      borderRadius:10 
    },
    heads:{
      // backgroundColor:"red",
      // padding:20,
      paddingVertical:23,
      textAlign:'center',
      alignItems:"center"
    },
    headline:{
      color:"black",
      fontSize:22,
      fontWeight:"bold",
    },
    headlines:{
      color:"gray",
      fontSize:20,
      color:"black",
      fontWeight:"bold",
      textAlign:"center"
    },
    
    menus:{
      borderColor:"black",
      borderTopWidth:1,
      paddingBottom:2
      // backgroundColor:"#CCCCFF"
    }
   
})