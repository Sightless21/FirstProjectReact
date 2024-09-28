import AsyncStorage from "@react-native-async-storage/async-storage";
import { http } from "./http-service";
import data from "./../node_modules/yup/node_modules/type-fest/source/readonly-deep.d";

export async function login(email: String, password: String) {
  const response = await http.post("https://api.codingthailand.com/api/login", {
    email: email,
    password: password,
  });
  await AsyncStorage.setItem("@token", JSON.stringify(response.data));
  return response;
}

export async function logout() {
  await AsyncStorage.removeItem("@token");
}

export async function getProfile() {
  const tokenString = await AsyncStorage.getItem("@token");
  if (!tokenString) {
    return null;
  }
  const token = JSON.parse(tokenString);
  const response = await http.get(
    "https://api.codingthailand.com/api/profile",
    {
      headers: {
        Authorization: "Bearer " + token.access_token,
      },
    }
  );
  return response;
}

/*
<Input placeholder='Email' leftIcon={{ name: 'email' }} keyboardType='email-address' />
*/
