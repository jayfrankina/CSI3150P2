import { Button, SafeAreaView, StyleSheet, Text, View, TextInput, DatePicker, date } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

//redux hook import to call dispatch to execute the reducers
import { useDispatch } from "react-redux";

// import all the reducers from data slice
import {
  setTaskName,
  setTaskDetails,
  setTaskDate,
  setTaskTime
} from "../slices/taskSlice";

import { useSelector } from "react-redux";

import {
  selectTaskName,
  selectTaskDetails,
  selectTaskDate,
  selectTaskTime
} from "../slices/taskSlice";


import { useNavigation } from "@react-navigation/native";

const InputTask = () => {
  const dispatch = useDispatch();

  const TaskName = useSelector(selectTaskName);
  const TaskDetails = useSelector(selectTaskDetails);
  const TaskDate = useSelector(selectTaskDate);
  const TaskTime = useSelector(selectTaskTime);

  const navigation = useNavigation();
  


  return (
      <View style={tw`flex items-center h-8 border-gray-200`}>
        <Text style={tw`text-lg`}>
            Add A Task
        </Text>
        <TextInput 
        style={tw`flex items-center h-8 border-gray-600`} 
        onChangeText={(newValue) => {dispatch(setTaskName(newValue))}}
        />
        <TextInput
        style={tw`flex items-center h-8 border-gray-600`} 
        onChangeText={(newValue) => {dispatch(setTaskDetails(newValue))}}
        />
        <TextInput
        style={tw`flex items-center h-8 border-gray-600`}
        onChangeText={(newValue) => {dispatch(setTaskDate(newValue))}} 
        />
        <TextInput
        style={tw`flex items-center h-8 border-gray-600`} 
        onChangeText={(newValue) => {dispatch(setTaskTime(newValue))}} 
        />
        <Button
          style={tw`pt-12 px-8 flex-row justify-around w-full`}
          title="View Tasks"
          onPress={() =>
            navigation.navigate('AgendaScreen')
          }
        />
      </View>
  );
};

export default InputTask;

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