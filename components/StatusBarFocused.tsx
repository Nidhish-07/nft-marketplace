import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";
type Props = { background: string };

const StatusBarFocused = (props: Props) => {
  const isFocused = useIsFocused();

  if (isFocused) {
    return <StatusBar animated={true} {...props}></StatusBar>;
  }
  return null;
};

export default StatusBarFocused;

const styles = StyleSheet.create({});
