import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Content from './components/Content';

export default function App(): React.JSX.Element {

  const onClickMe = () => {
    Alert.alert("Hi", "Hello React.js");
  }
  const users = [
    { id: 1001, name: 'John' },
    { id: 1002, name: 'Nick' },
  ]

  return (
    <View style = {styles.container}>
      <AppHeader title = "This is a Header"/>
      <Content/>
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
});
