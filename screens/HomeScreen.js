import { StyleSheet, Text, View, SafeAreaView, Image, Button } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import InputTask from "../components/inputTask";

const HomeScreen = () => {
return (
<SafeAreaView style={tw`bg-white h-full pt-10`}>
  <View>
    <InputTask />
  </View>
</SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  questionWrapper: {
    display: "flex",
  },
  questionText: {
    fontSize: 18,
    padding: 10,
  },
  questionOptions: {
    // flex: 1,
    flexDirection: "row",
    gap: 10,
    // alignItems: "center",
    // justifyContent: "center",
    paddingLeft: 8,
  },
});