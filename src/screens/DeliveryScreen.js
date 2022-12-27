import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../redux/restaurantSlice";
import MapView, { Marker } from "react-native-maps";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-green-300 flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text className=" text-white text-lg">Current order</Text>
        </View>
        <View className="bg-white mx-5 my-3 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <Text className="text-3xl font-bold text-slate-500">
              Ajunge in ... min
            </Text>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={30}
              color="green"
            />
          </View>
          <Text>Localul {restaurant.title} proceseaza comanda dmv.</Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude,
          }}
          description={restaurant.description}
          identifier="origin"
          pinColor="#66B032"
        />
      </MapView>
      <SafeAreaView className="bg-slate-300 flex-row items-center space-x-5 h-28">
        <Image
          source={require("../images/user_photo.png")}
          className="h-12 w-12 bg-green-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <View className="flex-row justify-between mr-5">
            <View>
              <Text className="text-lg">John Doe</Text>
              <Text className="text-xs">Nume sofer</Text>
            </View>
            <TouchableOpacity className="bg-white rounded-full h-10 w-10 items-center justify-center">
              <FontAwesome name="phone" size={24} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
