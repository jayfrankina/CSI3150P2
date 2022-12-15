import { Button, SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import { useSelector } from "react-redux";

import {
  selectTaskName,
  selectTaskDetails,
  selectTaskDate,
  selectTaskTime
} from "../slices/taskSlice";


import { useNavigation } from "@react-navigation/native";

const TaskData = () => {
  const TaskName = useSelector(selectTaskName);
  const TaskDetails = useSelector(selectTaskDetails);
  const TaskDate = useSelector(selectTaskDate);
  const navigation = useNavigation();

    // if (TaskDate == null) {
    //   TaskDate = new Date();
    // }
    // else

  return (
    <SafeAreaView>
      
      <View style={tw`flex items-center h-8 border-gray-200`}>
        {/* <Text style={tw`text-center text-xl`}>
          Welcome, view your tasks below.
        </Text> */}
        <Text style={tw`text-lg`}>
            Current Tasks
        </Text>
      </View>
      
    <View style={tw`pt-12 px-8 flex-row justify-around w-full`}>
      <Text style={tw`text-lg`}>{TaskName}</Text>
      <Text style={tw`text-base`}>{TaskDetails}</Text>
      <Text style={tw`text-lg`}>{TaskDate}</Text>
    </View>
    
    <View style={tw`pt-12 px-8 flex-row justify-around w-full`}>
      <Button
      title="deleteTasks"
      // onPress={() => MAKE DELETION BUTTON VISIBLE>
      style={tw`px-8`}>
      </Button>
      <Button
      title="addTasks"
      style={tw`px-8`}
      onPress={() => navigation.navigate("HomeScreen")}>
      </Button>
    </View>
  </SafeAreaView>
  );
};

export default TaskData;

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