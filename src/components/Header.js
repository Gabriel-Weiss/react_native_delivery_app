import { View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import Search from "./Search";

export default function Header() {
  return (
    <View>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../images/user_photo.png")}
          className="h-7 w-7 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-[#66B032] text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl text-[#487B23]">
            Current location...
            <FontAwesome name="angle-down" size={24} color="#9BD770" />
          </Text>
        </View>
        <FontAwesome name="user-circle" size={24} color="#9BD770" />
      </View>

      <Search />
    </View>
  );
}
