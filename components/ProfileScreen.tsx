import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './styles/styles';


const ProfileScreen = (): React.JSX.Element => {
    const profileImage = require("../assets/MyProfile.jpg");
    //const profileIcon = require('../assets/');
    
  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage}/>
            <Text style={styles.TextName}>Phanupong Pongbaidee</Text>
        </View>
    </View>
  )
}

export default ProfileScreen
