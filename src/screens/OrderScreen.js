import { View, Text, ActivityIndicator, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/cartSlice";

const FadeOutView = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const nagivation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      nagivation.navigate("Delivery");
      dispatch(deleteCart());
    }, 3500);
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function OrderScreen() {
  return (
    <SafeAreaView className="bg-slate-600 justify-center items-center flex-1">
      <FadeOutView>
        <Text>Order</Text>
        <ActivityIndicator size="large" color="#9BD770" />
      </FadeOutView>
    </SafeAreaView>
  );
}
