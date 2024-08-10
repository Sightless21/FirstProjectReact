import { View, Text } from 'react-native'
import React from 'react'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <FlastListExample /> */}
      <FlatListcallBackend />
    </View>
  )
}

export default App;