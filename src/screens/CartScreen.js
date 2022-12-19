import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../redux/restaurantSlice";
import { selectCartItems } from "../redux/cartSlice";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const [itemGroup, setItemGroup] = useState();
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const itemGrouped = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setItemGroup(itemGrouped);
  }, [items]);

  return (
    <SafeAreaView>
      <Text>CartScreen</Text>
    </SafeAreaView>
  );
}
