import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React from "react";

export default function Search() {
  return (
    <View className="flex-row items-center justify-evenly space-x-2 pb-2 mx-4">
      <View className="flex-1 flex-row space-x-2 bg-[#567e39] text-xs p-3">
        <FontAwesome name="search" size={24} color="#9BD770" />
        <TextInput
          placeholder="Search"
          keyboardType="default"
          placeholderTextColor="#9BD770"
        />
      </View>
      <Entypo name="sound-mix" size={24} color="#9BD770" />
    </View>
  );
}
