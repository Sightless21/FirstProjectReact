import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// Define type for the data structure
type User = {
  id: number;
  name: string;
  email: string;
};
const AxiosGetData = (): React.JSX.Element => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // string or null

  // fetching data by axios
  const fetchData = async () => {
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response.data);
    } catch {
      setError("Fail to fetch users");
    } finally {
      setLoading(false);
    }
  };

  // fetch user once starts
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size = "large" color= '#ed9a30' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style = {styles.errorText}>{error}</Text>  
      </View>
    );
  }

  return (
    <View>
      <FlatList 
      contentContainerStyle = {styles.container} 
      data={user}
      renderItem={({item}) => (
        <View style = {styles.item}>
            <Text style = {styles.name}>{item.name}</Text>
            <Text style = {styles.name}>{item.email}</Text>
        </View>
      )}
      keyExtractor={item => item.id.toString()}/>
    </View>
  );
};

export default AxiosGetData;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#69edef",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
