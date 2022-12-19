import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-4 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="mx-5 bg-[#9BD770] p-4 rounded-lg flex-row
      items-center space-x-1"
      >
        <Text className="text-white font-extrabold rounded-md text-lg bg-[#487B23] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          See Cart
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {cartTotal} Lei
        </Text>
      </TouchableOpacity>
    </View>
  );
}
