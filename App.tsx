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
import Content from './components/Content';

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
      <AppHeader Username="Phanpong Poungbaidee" Massage="Massage form App.tsx"/>
      <Content Username="Phanupong Poungbaidee" Massage='Massage form App.tsx'/>
      <StatusBar style="auto" />
      <AppFooter University="Thai-Nichi Institute of Technology" />
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
