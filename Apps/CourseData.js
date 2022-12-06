import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CourseData = () => {
  return (
    <View>

<View style={styles.mainView}>
        <View style={styles.flexBox}>
          <View style={styles.flexBox}>
            <Image
              source={require("../Image/sheets.webp")}
              style={{ height: 20, width: 20, marginRight: 15 }}
            />
            <Text style={{ fontWeight: '500', color: "black", fontSize: 15, fontFamily: "popins" }}>Movies</Text>
          </View>
          <View>
            <Image
              source={require("../Image/arrow.png")}
              style={{ height: 18, width: 18 }}
            />
          </View>
        </View>
      </View>


      <View style={styles.mainView}>
        <View style={styles.flexBox}>
          <View style={styles.flexBox}>
            <Image
              source={require("../Image/rating.png")}
              style={{ height: 20, width: 20, marginRight: 15 }}
            />
            <Text style={{ fontWeight: '500', color: "black", fontSize: 15, fontFamily: "popins" }}>My Ratings</Text>
          </View>
          <View>
            <Image
              source={require("../Image/arrow.png")}
              style={{ height: 18, width: 18 }}
            />
          </View>
        </View>
      </View>


      <View style={styles.mainView}>
        <View style={styles.flexBox}>
          <View style={styles.flexBox}>
            <Image
              source={require("../Image/logout.png")}
              style={{ height: 20, width: 20, marginRight: 15 }}
            />
            <Text style={{ fontWeight: '500', color: "black", fontSize: 15, fontFamily: "popins" }}>Logout</Text>
          </View>
          <View>
            <Image
              source={require("../Image/arrow.png")}
              style={{ height: 18, width: 18 }}
            />
          </View>
        </View>
      </View>

    </View>
  )
}

export default CourseData

const styles = StyleSheet.create({
  
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between"
  },
  mainView: {
    paddingVertical:20
  }
})
