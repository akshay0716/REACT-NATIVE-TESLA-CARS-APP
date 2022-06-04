import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelX.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,400</Text>
      </View>
    </View>
  );
};

export default CarItem;
