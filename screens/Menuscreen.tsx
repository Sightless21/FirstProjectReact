import * as React from "react";
import { View } from "react-native";
import { Header, ListItem, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";


const MenuScreen = ({navigation}:any):React.JSX.Element => {
  return (
    <View>


    <Header
      backgroundColor="#215A41"
      barStyle="default"
      centerComponent={{
        text: "Thai-Nichi",
        style: { color: "#fff", fontWeight: 'bold' }
      }}
      containerStyle={{ width: "100%", height: 200 }}
    />
    <>
  <ListItem
  bottomDivider
  onPress={() => {navigation.navigate('Home')}}
  >
    <Icon name="home" type="material-community" color="#00C08A" />
    <ListItem.Content>
      <ListItem.Title>Home</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  <ListItem
  onPress={() => {navigation.navigate('ProductStack')}}>
    <Icon name="star" type="material-community" color="#00C08A" />
    <ListItem.Content>
      <ListItem.Title>Products</ListItem.Title>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
</>
    </View>
  )
}

export default MenuScreen