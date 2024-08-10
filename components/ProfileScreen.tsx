import { StyleSheet, Text, View, Image, Button } from 'react-native'
import {stylesPractice,styles} from './styles/styles';
import { useEffect, useState } from 'react';


const ProfileScreen = (): React.JSX.Element => {
    const profileImage = require("../assets/MyProfile.jpg");
    const profileImage2 = require("../assets/Profile_Nerd.png")

    const [name,setName] = useState("Phanupong Pougbaidee");
    const [profile,setProfile] = useState(profileImage);


    const handleChangeImage = () => {
        
        setProfile(profile == profileImage2 ? profileImage :profileImage2 )
    }
    const handleChangeName = () => {
        setName(name == "Phanupong Pougbaidee" ? "Sightless21" : "Phanupong Pougbaidee");
    }
    
  return (
    <View style={stylesPractice.container}>
        <View style={styles.profileContainer}>
            <Image source={profile} style={styles.profileImage}/>
            <View>
                <Text style={stylesPractice.text}>{name}</Text>
                <Button title='Change Name' onPress={handleChangeName} />
                <Text/>
                <Button title='Change Profile' onPress={handleChangeImage}></Button>
            </View>
        </View>
    </View>
  )
}

export default ProfileScreen
