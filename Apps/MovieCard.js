import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieCard = () => {
    let data = [{
        id: 1,
        MovieName: "vikings",
        img: "https://www.themoviedb.org/t/p/w220_and_h330_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
        date: "06 may 2006",
        icon: require("../Image/delete.png")
    },
    {
        id: 2,
        MovieName: "vikings",
        img: "https://flxt.tmsimg.com/assets/p9155926_b_v10_au.jpg",
        date: "06 may 2006",
        icon: require("../Image/delete.png")
    },
    {
        id: 3,
        MovieName: "vikings",
        img: "https://flxt.tmsimg.com/assets/p9155926_b_v10_au.jpg",
        date: "06 may 2006",
        icon: require("../Image/delete.png")
    },
    {
        id: 4,
        MovieName: "vikings",
        img: "https://www.themoviedb.org/t/p/w220_and_h330_face/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
        date: "06 may 2006",
        icon: require("../Image/delete.png")
    }
 
    ]
    return (
        <View style={{top:20}}>

            <FlatList 
                data={data}
                numColumns={2}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                (
            
                    <View style={styles.movies_main_container}>
                        <Image source={{ uri: item.img }} style={styles.img} />
                        <Text style={styles.movies_name}>{item.MovieName}</Text>
                        <View style={styles.flex_movies}>
                            <Text style={styles.flex_date}>{item.date}</Text>
                            <Image style={styles.icon} source={item.icon} />
                        </View>
                    </View>
                
                    
                    
                )
                } />
        </View>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    movies_main_container: {
        borderColor: "black",
        width: 156.64,
        borderRadius: 13,
        height: 289,
        backgroundColor: "#EAEAEA",
        left:8,
        marginVertical:7,
        marginLeft:10
    },
    img: {
        width: 149.62,
        height: 218.67,
        borderWidth: 2,
        borderRadius: 11,
        left:2.7,
        top:1
    },
    flex_movies: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    flex_date: {
        width: 54.17,
        fontSize: 8.96906,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: 11,
        fontFamily: "Roboto",
        width: 54.17,
        height: 10.96,
        left: 7,
        top: 25,
        color: "#000000"
    },
    icon: {
        width: 20,
        height: 20,
        right: 10,
        top: 20

    },
    movies_name: {

        color: "#000000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 14.0664,
        lineHeight: 21,
        fontWeight: "500",
        height: 21,
        width: 104.33,
        left: 7,
        top: 10

    }

})