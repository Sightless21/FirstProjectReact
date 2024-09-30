import { Text, View, Image, Button } from "react-native";
import React from "react";
import { styles } from "../styles/styles";
import { useState } from "react";

const ProfileScreen = () => {
  const profileImage = require("../assets/pfp1.jpg");
  const profileImage2 = require("../assets/pfp2.jpg");
  const [name, setName] = useState("Paisan Kiatjanon");
  const [img, setImg] = useState(profileImage);

  const handleChangeName = () => {
    name == "Tanakarn Kiatjanon"?setName("Paisan Kiatjanon"):setName("Tanakarn Kiatjanon");
  };
  const handleChangeImg = () => {
    setImg(profileImage2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {/* Text & buttons container */}
        <Image style={styles.profileImage} source={img} />
        <View>
          <Text style={styles.profileName}>{name}</Text>

          {/* buttons container */}
          <View style={{ width: 150 }}>
            <Button
              title="Change Name"
              onPress={() => handleChangeName()}
              color={"#69b4c2"}
            />
            <Text></Text>
            <Button
              title="Change Image"
              onPress={() => handleChangeImg()}
              color={"#69b4c2"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
