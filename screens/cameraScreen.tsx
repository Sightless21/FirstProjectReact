import { View, Text,Touchable } from 'react-native'
import React, { useState } from 'react'
import {CameraView,CameraType,useCameraPermissions} from 'expo-camera';
import { styles } from '../components/styles/styles';
import { Button } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const cameraScreen = () => {

  const [facing,setFacing] = useState<CameraType>('back')
  const [permission,requestPermisstion] = useCameraPermissions();

  if(!permission){
    //still loading
    return <View/>
  }

  if(!permission.granted){
    return(
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermisstion} title="grant permisstion"/>
      </View>
    );
  };

  function toggleCameraFacing(){
    setFacing((currentFacing) => (currentFacing === 'back' ? 'front' : 'back'));
  }

  return (
    <View>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  preview: {
      width: 300,
      height: 300,
      marginTop: 20,
  },
});

export default cameraScreen;
