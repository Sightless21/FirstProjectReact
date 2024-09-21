import {
    View,
    Text,
    FlatList,
    ListRenderItem,
    ActivityIndicator,
  } from "react-native";
  import React, { useLayoutEffect, useState } from "react";
  import {
    HeaderButton,
    HeaderButtons,
    Item,
  } from "react-navigation-header-buttons";
  import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
  import { useFocusEffect, useNavigation } from "@react-navigation/native";
  import { findAllProduct } from "../services/product-service";
  
  import { ListItem, Avatar } from "@rneui/themed";
  import { Badge } from "@rneui/base";
  
  const MaterialHeaderButton = (props: any) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
  );
  
  const ProductScreen = (): React.JSX.Element => {
    const navigation = useNavigation<any>();
  
    const [product, setProduct] = useState<any[]>([]); //[] array
    const [loading, setLoading] = useState<boolean>(false);
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => <Text>Product</Text>,
        headerTitleAlign: "center",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item
              title="menu"
              iconName="menu"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          </HeaderButtons>
        ),
      });
    }, [navigation]);
  
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await findAllProduct();
        //console.log(response.data.data);
        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    useFocusEffect(
      React.useCallback(() => {
        getProduct();
      }, [])
    );
  
    if (loading) {
      return <ActivityIndicator size="large" color="blue" />;
    }
  
    const _renderItem: ListRenderItem<any> = ({ item }) => {
      return (
        <>
          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate("Details", {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Avatar source={{ uri: item.picture }} size={50} rounded />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <Badge value={item.view} status="success" />
          </ListItem>
        </>
      );
    };
  
    return (
      <View>
        <FlatList
          data={product}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          onRefresh={() => {
            getProduct();
          }}
          refreshing={loading}
        />
      </View>
    );
  };
  
  export default ProductScreen;