import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import {
    HeaderButton,
    HeaderButtons,
    Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const MaterialHeaderButton = (props: any) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {

    const navigation = useNavigation<any>();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Product",
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


    return (
        <View>
            <Text>ProductScreen</Text>
        </View>
    );
};

export default ProductScreen;