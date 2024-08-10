import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

interface User {
    title: string;
    description: string;
    publishedAt: string;
    url: string;
}

const NewsApp = () => {

    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    //const [error,setError] = useState(null);

    useEffect(() => {
        const API_KEY = "7c5ed45ae7944c5195ab2b2df85c4355"
        const URL = `https://newsapi.org/v2/everything?q=apple&from=2024-08-09&to=2024-08-09&sortBy=popularity&apiKey=${API_KEY}`
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data.articles);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, []);

    const _renderItem = ({ item }: { item: User }) => (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.headline}>{item.title}</Text>
            <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    )

    return (
        <View>
            {loading ? ( // if still loading must render ActivityIndicator
                <ActivityIndicator size='large' color="red" />
            ) : (
                <FlatList
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item.url}
                />
            )
            }

        </View>
    )
}

export default NewsApp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0'
        ,
        padding: 16
        ,
    },
    loadingContainer:
    {
        justifyContent: 'center'
        ,
        alignItems: 'center'
        ,
    },
    errorContainer:
    {
        justifyContent: 'center'
        ,
        alignItems: 'center'
        ,
    },
    errorText:
    {
        fontSize: 18
        ,
        color: 'red'
        ,
    },
    card:
    {
        backgroundColor: '#fff'
        ,
        padding: 16
        ,
        marginVertical:
            8
        ,
        borderRadius: 10
        ,
        shadowColor: '#000'
,
        shadowOffset: {
            width:
                0, height:
                2
        },
        shadowOpacity: 0.1
        ,
        shadowRadius:
            8
        ,
        elevation:
            3
        ,
    },
    headline:
    {
        fontSize: 18
        ,
        fontWeight: 'bold'
        ,
        marginBottom:
            8
        ,
    },
    date:
    {
        fontSize: 14
        ,
        color: '#888'
,
        marginBottom:
            8
        ,
    },
    description:
    {
        fontSize: 16
        ,
        color: '#333'
,
    },



})