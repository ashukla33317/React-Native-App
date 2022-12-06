import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../API/Courses"

const Course = (props) => {
  return (
    <View style={{backgroundColor:"#CCCCFF"}}>
      <FlatList data={Courses}  renderItem={({item})=>{
        return(
            <View style={styles.head}>
                {/* <Text>{item.id}</Text> */}
                <Image  style={styles.img} source={item.image}/>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.dis}>{item.Discription}</Text>
                <Text style={styles.course}>{item.course_1}</Text>
                <Text style={styles.course}>{item.course_2}</Text>
                <Text style={styles.course}>{item.course_3}</Text>
                <Text style={styles.paisa}>{item.price}</Text>
                <TouchableOpacity style={{marginHorizontal:40}} onPress={()=>alert("welcome")}>
                    <Text style={styles.btn}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        )
      }} />
    </View>
  )
}

export default Course

const styles = StyleSheet.create({
  img:{
    width:250,
    height:160,
    margin:20
  },
  title:{
    color:"#6495ED",
    textAlign:"center",
    fontSize:25,
    textShadowColor:"blue",
  },
  dis:{
    color:"gray",
    textAlign:"center",
    fontSize:15,
    textShadowColor:"blue",
  },
  course:{

    textAlign:'center',
    fontSize:20,

  },
  paisa:{
    color:"#000080",
    textAlign:"center",
    fontSize:30,
    textShadowColor:"blue",
  },
  btn:{
    color:"#6495ED",
    textAlign:"center",
    fontSize:20,
    backgroundColor:"#6495ED",
    color:"black",
    marginHorizontal:45,
    margin:11,
    padding:12,
    borderRadius:20
  },
  head:{
    marginHorizontal:30,
    borderColor:"#FFFFFF",
    shadowColor:"#FFFFFF",
    borderWidth:2,
    elevation:10,
    marginVertical:10,
    width:300,
    backgroundColor:"#FFFFFF"
  }
})