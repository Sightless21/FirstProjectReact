import { View, Text } from 'react-native'
import React from 'react'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import AxiosgetData from './components/AxiosgetData'
import AxiosPostData from './components/AxiosPostData'
import WeatherLondon from './components/WeatherLondon'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <FlastListExample /> */}
      {/* <FlatListcallBackend /> */}
      {/* <NewsApp /> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      <WeatherLondon/>
    </View>
  )
}

export default App;