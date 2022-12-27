import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../redux/cartSlice";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const [itemGroup, setItemGroup] = useState([]);
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    const itemGrouped = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setItemGroup(itemGrouped);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-slate-500 bg-white shadow-xs">
          <Text className="text-lg font-bold text-center">Cart</Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          className=" absolute top-3 right-5"
        >
          <FontAwesome name="window-close-o" size={24} color="#9BD770" />
        </TouchableOpacity>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require("../images/user_photo.png")}
            className="h-7 w-7 p-4 rounded-full"
          />
          <Text className="flex-1">Ajunge in ... min</Text>
          <TouchableOpacity>
            <Text className="text-[#66B032]">Modifica</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y-2 divide-slate-200">
          {Object.entries(itemGroup).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text>{items?.length} x </Text>
              <Image
                source={{ uri: items[0]?.image }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.title}</Text>
              <Text>{items[0]?.price} Lei</Text>
              <TouchableOpacity>
                <Text
                  className="text-[#66B032] text-xs"
                  onPress={() => dispatch(removeFromCart({ id: key }))}
                >
                  Elimina
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-slate-500">Total</Text>
            <Text className="text-slate-500">{cartTotal} Lei</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Order")}
            className="rounded-lg bg-[#9BD770] p-4"
          >
            <Text className="text-center text-white text-lg font-bold">
              Comanda
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
