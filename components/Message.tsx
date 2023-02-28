import React from "react";
import { View, Pressable } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type messageProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function Message({ navigation }: messageProps) {
  const handlePress = () => {
    navigation.navigate("Inbox");
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <FontAwesome name={"paper-plane"} size={35} color={"#1A256A"} />
      </Pressable>
    </View>
  );
}