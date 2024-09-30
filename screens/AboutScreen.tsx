import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({route}: any): React.JSX.Element=> {
  const {companyId, companyName} = route.params;
  return (
    <ImageBackground
      style={styles.bgImage}
      resizeMode="stretch"
      source={require("../Images/bg.png")}
    >
      <SafeAreaView>
        <Image
          source={require("../Images/banana.jpg")}
          resizeMode="stretch"
          style={styles.myImage}
        />
        <Text>
          {companyName} {companyId}
        </Text>
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_banners/1133065471312375808/1715962930/600x200"
          }}
          style={styles.myImageNetwork}
        />
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
    marginTop: 50,
  },
  myImageNetwork: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
