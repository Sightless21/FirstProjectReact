import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

export default function App(): React.JSX.Element /* <<<=== Must have to make ure ths app can use Typescript */ {
  /* how to create function */
  const onClickMe = () => {
    Alert.alert("Hi", "Hello React.js");
  }
  /* create array */
  const users = [
    { id: 1001, name: 'John' },
    { id: 1002, name: 'Maree' }
  ];

  return ( /* render JXS and typescript */
    <View style={styles.container}>
      <AppHeader title="This is Header" year={2006}/>
      <AppHeader title="This is Header2"/>
      <Text>Hello React Native</Text>
      {
        users.map((user, index) => {
          return (
            <Text key={user.id}>
              No. {index} ID: {user.id} Name: {user.name}
            </Text> /* user array */
          )
        })}

      <Button title='CLick me:)' onPress={onClickMe} color="#841584"/* onPress={() => {Alert.alert('Hi', 'React Native is Fun')}} */ />
      <StatusBar style="auto" />
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
