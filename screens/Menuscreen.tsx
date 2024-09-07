import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, ListItem,Icon } from "@rneui/base";

const MenuScreen = ({ navigation }: any): React.JSX.Element => {
  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: "Thai-Nichi",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
      />
      <>
        <ListItem 
          bottomDivider //เส้นขีดระหว่างเมนู
          onPress={()=> {navigation.navigate('HomeStack')}} 
        >
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={()=> {navigation.navigate('ProductStack')}} >
          <Icon
            name="star"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>{/*  */}
          <ListItem.Chevron />{/*  */}
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;