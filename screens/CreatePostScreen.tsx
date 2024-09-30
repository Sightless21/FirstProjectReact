import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const CreatePostScreen = ({navigation, route}:any): React.JSX.Element => {
    const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput 
      multiline
      placeholder='Tell us something...'
      style = {{height: 200, padding: 10, backgroundColor: '#121212', color: 'white', marginBottom: 10}}
      value= {postText}
      onChangeText={(postText) => setPostText(postText)}
      />
      <Button
      title='Done'
      onPress={() =>  navigation.navigate({
        name: 'Home',
        params: {post: postText}
      })}/>
    </>
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({})