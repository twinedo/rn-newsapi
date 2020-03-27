import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text, Button, FlatList } from 'react-native';
import NewsCard from '../components/NewsCard';
import api from '../../api/News';

const News = ({navigation}) => {

    const [news, setNews] = useState([])

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function getNewsFromAPI() {
        api.get('/top-headlines?country=us&apiKey=a653300766444770bf4781451290bedf')
        .then(function(response) {
            setNews(response.data)
            console.log(news);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    if (!news) {
        return null;
    }

    return (
        <View>
            <FlatList 
                data={news.articles}
                keyExtractor= {(item, index) => 'key: ' + index}
                renderItem= {({item}) => {
                    return (<NewsCard item = {item}/>)
                }}
            />
        </View>
    )
}

export default News;