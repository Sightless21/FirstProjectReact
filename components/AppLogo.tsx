import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const AppLogo = (): React.JSX.Element => {
  return (
    <View>
      <Image
        source={require("../Images/tni_logo.png")}
        resizeMode="cover"
        style={styles.logo}
      />
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  logo: {
    width: 70,
    height: 50,
  },
});
