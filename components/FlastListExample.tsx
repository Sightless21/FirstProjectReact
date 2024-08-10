import { StyleSheet, Text, View , FlatList} from 'react-native'
import React from 'react'

interface UserItem{
    id: string;
    name: string;
    email: string;
}

const FlastListExample = ():React.JSX.Element => {

    const user: UserItem[] = [
        { id: '1', name: 'Alice', email: 'alice@example.com' },
        { id: '2', name: 'Bob', email: 'bob@example.com' },
        { id: '3', name: 'Cara', email: 'cara@example.com' }
    ];

    //_renderitem Function

    const _renderItem = ({item}:{item:UserItem}) =>(
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    )

  return (
    <View>
        <FlatList style={styles.container}
            data={user} //กำหนดข้อมูลให้กับ flatlist
            renderItem={_renderItem} // สร้างฟังชั่น renderItem
            keyExtractor={(item)=> item.id} //
        />
    </View>
  )
}

export default FlastListExample

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
    },
});