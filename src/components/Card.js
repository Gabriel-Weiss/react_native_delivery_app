import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/db.config";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Card({
  id,
  image,
  title,
  rating,
  category,
  address,
  description,
  longitude,
  latitude,
}) {
  const navigation = useNavigation();
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const dishesQuery = query(collection(db, `restaurants/${id}/dishes`));
    onSnapshot(dishesQuery, (querySnapshot) => {
      let dishDocs = [];
      querySnapshot.docs.forEach((doc) => {
        dishDocs.push({ id: doc.id, ...doc.data() });
      });
      setDishes(dishDocs);
    });
  }, [id]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          image,
          title,
          rating,
          category,
          address,
          description,
          dishes,
          longitude,
          latitude,
        })
      }
      className="bg-white mr-3"
    >
      <Image source={{ uri: image }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" size={24} color="gold" />
          <Text className="text-xs text-gray-500">
            {rating}
            <Text className="text-[#66B032]"> - {category}</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          {address && <Entypo name="location" size={24} color="gray" />}
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
