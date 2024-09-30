import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProductById } from "../services/product-service";
import { Tile, Badge, ListItem } from "@rneui/themed";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const [detail, setDetail] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  const getProductByID = async () => {
    try {
      setLoading(true);
      const response = await findProductById(route.params.id);
      console.log(response.data.data);
      setDetail(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <Tile
          imageSrc={{
            uri: "https://i.kym-cdn.com/photos/images/newsfeed/002/888/734/aa0.jpg",
            cache: "force-cache",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          containerStyle={styles.tileContainer}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
        />
      </>
    );
  };
  useFocusEffect(
    useCallback(() => {
      getProductByID();
    }, [])
  );

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={"#00C08A"} />
      ) : (
        <FlatList
          data={detail}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.ch_id.toString()}
          onRefresh={async () => {
            await getProductByID();
          }}
          refreshing={loading}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue", // สีขาวสำหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //กำหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //กำหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //กำหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาสำหรับ Android
    shadowOffset: { width: 0, height: 2 }, //กำหนดตำแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //กำหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //กำหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "blue", // สีขาวสำหรับวันที่
  },
});
