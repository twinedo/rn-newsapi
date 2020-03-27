import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window')

const NewsCard = ({item}) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>Author: {item.author}</Text>
            <Image style={styles.image} source={{uri: item.urlToImage}}/>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: height * 0.03,
        marginHorizontal: width * 0.05,
        color: 'grey',
        fontSize: 18
    },
    image: {
        height: height / 3,
        marginHorizontal: width * 0.01,
        marginVertical: height * 0.02
    },
    author: {
        marginVertical: width * 0.01,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'red'
    }
})

export default NewsCard;