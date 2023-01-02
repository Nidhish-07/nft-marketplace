import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import StatusBar from "../components/StatusBarFocused";
import React from "react";

import DUMMY_DATA from "../constants/dummy-data";

type Props = {};

const Home = (props: Props) => {
  const [] = React.useState<>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar background={"#142638"}></StatusBar>

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={DUMMY_DATA}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <Card data={itemData.item}></Card>}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Header></Header>}
          ></FlatList>
        </View>
        <View style={styles.backgroundPos}>
          <View style={styles.topHalf}></View>
          <View style={styles.bottomHalf}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundPos: {
    position: "absolute",
    inset: 0,
    zIndex: -1,
  },
  topHalf: {
    height: 300,
    backgroundColor: "#142638",
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
