import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        <Restaurants
          id="1"
          title="Restaurants"
          description="Come, come in what are you waiting for!!!"
        />
        <Restaurants
          id="2"
          title="Discounts"
          description="Hot discounts for everyone!!!"
        />
        <Restaurants
          id="3"
          title="Near"
          description="Why don't you visit places near your location"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
