import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/db.config";
import Card from "./Card";

export default function Restaurants({ id, title, description }) {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const restaurantsQuery = query(collection(db, "restaurants"));
    onSnapshot(restaurantsQuery, (querySnapshot) => {
      let restaurantDocs = [];
      querySnapshot.docs.forEach((doc) => {
        restaurantDocs.push({ id: doc.id, ...doc.data() });
      });
      setRestaurants(restaurantDocs);
    });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <FontAwesome name="arrow-right" size={24} color="#9BD770" />
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants ? (
          restaurants.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              rating={data.rating}
              category={data.category}
              address={data.address}
              description={data.description}
              longitude={data.location.longitude}
              latitude={data.location.latitude}
            />
          ))
        ) : (
          <Text>No data!!!</Text>
        )}
      </ScrollView>
    </View>
  );
}
