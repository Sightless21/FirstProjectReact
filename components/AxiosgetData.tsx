import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

type User = {
    id: number;
    name: string;
    email: string;
}

const AxiosgetData = (): React.JSX.Element => {
    const [users, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => { 
        try {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
            const data = response.data;
            setUser(data);
        } catch {
            setError(`Faild to fetch users`);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    if(loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if(error){
        return (
            <View>
                <FlatList 
                contentContainerStyle = {styles.container} 
                data={users} 
                renderItem={({item})=>(
                    <View>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                        
                />
            </View>
        )
    }
    return (
        <View>
            <Text>AxiosgetData</Text>
        </View>
    )
}

export default AxiosgetData

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
    },
})