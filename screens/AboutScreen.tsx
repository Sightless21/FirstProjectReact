import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({ route }: any): React.JSX.Element => {
  const { itemId, otherParam } = route.params;

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={styles.bgImage}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />
        <Text>
          {itemId}
          {otherParam}
        </Text>
        <Image
          source={{ uri: "https://codingthailand.com/site/img/camera.png" }}
          style={styles.myImageNetwork}
        />
        <View style={styles.container}>
          <Text>{itemId}</Text>
          <Text>{otherParam}</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  myImageNetwork: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
