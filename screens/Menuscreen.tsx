import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, ListItem, Icon } from "@rneui/base";
import { selectAuthState } from "../auth/auth-sliec";
import { useAppSelector } from "../redux-toolkit/hooks";

const MenuScreen = ({ navigation }: any): React.JSX.Element => {
  const {profile} = useAppSelector(selectAuthState);
  return (
    <View>
      <Header
        barStyle="default"
        centerComponent={{
          text: profile?"Welcome ,"+profile.name:"",
          style: { color: "#fff" },
        }}
        containerStyle={{ width: "100%", height: 200 }}
      />
      <>
        <ListItem
          bottomDivider //เส้นขีดระหว่างเมนู
          onPress={() => { navigation.navigate('HomeStack') }}
        >
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={() => { navigation.navigate('ProductStack') }} >
          <Icon
            name="star"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;