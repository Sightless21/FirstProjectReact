import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

interface News {
  title: string;
  description: string;
  publishedAt: string; //new Date(item.publishedAt).toLocaleDateString()
  url: string;
}

const NewsApp = (): React.JSX.Element => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  //const url =  ;

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d9db622937494816bbf49f39e5c0350a")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const _renderItem = ({ item }: { item: News }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.headline}>{item.title}</Text>
      <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()} </Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style = {styles.container}>
        {/* <Text>WHAT</Text> */}
        <FlatList
          data={news}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url}
        />
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a2705f",
    padding: 16,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  card: {
    backgroundColor: "#fdfdea",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});
