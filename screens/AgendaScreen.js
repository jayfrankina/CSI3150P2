import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import TaskData from "../components/taskData";

const HomeScreen = () => {
return (
<SafeAreaView style={tw`bg-white h-full pt-10`}>
  <TaskData />
</SafeAreaView>
  );
};

export default HomeScreen

