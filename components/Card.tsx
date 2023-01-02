import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

interface CardData {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: TexImageSource;
  bids: {}[];
}

type Props = { data: CardData };

const Card = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={props.data.image}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <TouchableOpacity style={styles.pressed}>
          <Ionicons name="heart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 24,
    margin: 8,
    shadowColor: "#74858c",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 14,
  },
  card: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  pressed: {
    width: "40",
    height: "40",
    backgroundColor: "#fff",
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#74858c",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2.25,
    elevation: 3,
  },
});
