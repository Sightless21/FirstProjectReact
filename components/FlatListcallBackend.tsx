import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect , useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface User{
    id: number;
    name : string;
    email : string;
}
const FlatListcallBackend = () => {

    //get data form User and status loading
    const [data,setData] = useState<User[]>([]);
    const [loading,setLoading]=useState(true);

    //กำหนด useEffect for API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error =>{
            console.error(error);
            setLoading(false);
        })
    },[]);

    //function for _renderItem use in FlatList
    const _renderItem = ({item}:{item:User}) =>(
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    )


  return (
    <View style={styles.container}>

    {loading ? ( // if still loading must render ActivityIndicator
        <ActivityIndicator size='large' color="red"/>
        ):(
            <FlatList
                data={data}
                renderItem={_renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        )   
    }
    </View>
  )
}

export default FlatListcallBackend

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 50,
    },
    item: {
        backgroundColor: '#D1E9F6',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
    },
});