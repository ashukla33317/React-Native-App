import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation=useNavigation()
    const model=()=>{
      navigation.navigate("contact")
      
    }
  return (
    <View style={styles.ContainerNav}>
      <TouchableOpacity onPress={()=>navigation.navigate("about")}>
            {/* <Text style={styles.Textstyle}>About</Text> */}
            <Image style={styles.Image} source={{uri:"https://img.icons8.com/3d-fluency/344/about.png"}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("course")}>
            {/* <Text style={styles.Textstyle}>Course</Text> */}
            <Image style={styles.Image} source={{uri:"https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-course-university-flaticons-flat-flat-icons-4.png"}}/>
            
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("userdata")}>
            {/* <Text style={styles.Textstyle}>UserData</Text> */}
            <Image style={styles.Image} source={require("../Image/profile1.png")}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={model}>
            {/* <Text style={styles.Textstyle}>Contact</Text> */}
            <Image style={styles.Image} source={{uri:"https://img.icons8.com/bubbles/344/id-curly-hair-male-student.png"}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    ContainerNav:{
        flexDirection:"row",
        justifyContent:"space-evenly"
        // backgroundColor:"#FFFFFF"
    },
    Textstyle:{
        fontSize:20,
        textTransform:'capitalize',
        color:"black",
    },
    Image:{
        height:50,
        width:50,
        paddingBottom:10
    }
})