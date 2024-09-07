import { View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";

import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiosPostData from "./components/AxiosPostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";

import AboutScreen from "./screens/AboutScreen";

const App5 = (): React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen /> */}
      {/* <UseEffectExample/> */}
      {/* <FlatListExample /> */}
      {/* <FlatListCallBackend/> */}
      {/* <NewsApp /> */}
      {/* <AxiosgetData /> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok /> */}
      {/* <ModalExample /> */}
      {/* <WeatherApp /> */}
      <AboutScreen />
    </View>
  );
};

export default App5;
