import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Dish from "../components/Dish";
import Cart from "../components/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux/restaurantSlice";

export default function RestaurantScreen() {
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
    );
  }, [dispatch]);

  return (
    <>
      <Cart />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: image }}
            className="w-full h-60 p-4 bg-gray-300"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-1 bg-gray-100 rounded-full"
          >
            <FontAwesome name="arrow-left" size={25} color="#55763d" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row space-x-2">
                <FontAwesome name="star" size={24} color="gold" />
                <Text className="text-base text-gray-500">{rating}</Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Entypo name="location" size={24} color="gray" />
                <Text className="text-base text-gray-500">{address}</Text>
              </View>
            </View>
            <Text className="text-gray-400 mt-2 pb-4">{description}</Text>
          </View>
        </View>
        <View className="pb-20">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes ? (
            dishes.map((data) => (
              <Dish
                key={data.id}
                id={data.id}
                image={data.image}
                title={data.title}
                price={data.price}
                description={data.description}
              />
            ))
          ) : (
            <Text>No data!!!</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
}
