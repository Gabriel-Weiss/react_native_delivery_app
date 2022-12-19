import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Category({ id, image, title }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: image }} className="h-20 w-20 rounded" />
      <View className="bg-white m-2">
        <Text className="absolute bottom-1 left-1 font-bold text-black">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
