import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/useEffectExample'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/> */}
      <UseEffectExample/>
    </View>
  )
}

export default App;