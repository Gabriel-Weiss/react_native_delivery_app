import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/db.config";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesQuery = query(collection(db, "categories"));
    onSnapshot(categoriesQuery, (querySnapshot) => {
      let categoryDocs = [];
      querySnapshot.docs.forEach((doc) => {
        categoryDocs.push({ id: doc.id, ...doc.data() });
      });
      setCategories(categoryDocs);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {categories ? (
        categories.map(({ id, image, name }) => (
          <Category key={id} id={id} image={image} title={name} />
        ))
      ) : (
        <Text>No data!!!</Text>
      )}
    </ScrollView>
  );
}
