import "react-native-gesture-handler"; // needs to be at the top of App.tsx
import { ActivityIndicator, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuScreen from "./screens/MenuScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppDispatch, useAppSelector } from "./redux-toolkit/hooks";
import { selectAuthState, setIsLoading, setIsLogin } from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'CameraStack') {
          iconName = focused ? 'camera' : 'camera-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#EB3DA9",
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarActiveBackgroundColor: '#eeeeee'
    })}
    >
      <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{ tabBarLabel: 'Na lak' }} />
      <Tab.Screen
        name="CameraStack"
        component={CameraStackScreen}
        options={{ tabBarLabel: 'Camera' }}
      />
    </Tab.Navigator>
  )
}

function CameraStackScreen() {
  return (
    <CameraStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <CameraStack.Screen name="Camera" component={CameraScreen} options={{
        headerStyle: { backgroundColor: "#205a41" },
        headerTintColor: "white",
      }} />

    </CameraStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Global config
        // headerStyle: { backgroundColor: "#205a41" },
        // headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        options={{
          title: "Main",
        }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          title: "About Us",
          headerStyle: { backgroundColor: "#205a41" },
          headerTintColor: "white",
        }}
        name="About"
        component={AboutScreen}
      />

    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} options={{
        headerStyle: { backgroundColor: "#FFB449" },
        headerTintColor: "white",
      }} />

    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {

  // useAppSelector to pull the state from Store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.data.user) {
        dispatch(setIsLogin(true))
      } else {
        dispatch(setIsLogin(false))
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(setIsLoading(false))
    }
  }
  useFocusEffect(
    React.useCallback(() => {
      checkLogin();
    }, [])
  )

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <ActivityIndicator size="large" color={'#FFB449'} />
      </View>
    )
  }

  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        )
          : (
            <LoginStackScreen />
          )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>

    </Provider>
  );
};

export default AppWrapper;
