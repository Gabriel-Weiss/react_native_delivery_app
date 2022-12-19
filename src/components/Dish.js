import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../redux/cartSlice";

export default function Dish({ description, id, image, price, title }) {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectCartItemsById(state, id));

  const addToCartHandler = () => {
    dispatch(addToCart({ description, id, image, price, title }));
  };
  const removeFromCartHandler = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">{title}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">{price} lei</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#e4e2e2" }}
              source={{ uri: image }}
              className="h-20 w-20 bg-gray-300 p-4 "
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className=" bg-white px-4">
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              onPress={removeFromCartHandler}
              disabled={!items.length}
            >
              <FontAwesome
                name="minus-square"
                size={40}
                color={items.length > 0 ? "#66B032" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addToCartHandler}>
              <FontAwesome name="plus-square" size={40} color="#66B032" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
