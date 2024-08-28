import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import React from "react";
import CommuteFav from "@/screens/CommuteFav";

const CommuteScreen = () => {
  const [isAdded, setIsAdded] = React.useState(false);

  const [text, onChangeText] = React.useState("Where are you going?");
  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("@/assets/Background img/home-bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.pagetitle}>Commute</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={styles.subtitle}>Favourites</Text>
        <CommuteFav />
        <Text style={styles.subtitle}>Recent</Text>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    display: "flex",
    flex: 1,
  },
  pagetitle: {
    color: "white",
    fontSize: 48,
    fontFamily: "Syne-Bold",
    marginLeft: 16,
    marginTop: 16,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 20,
  },
  input: {
    borderColor: "white",
    borderRadius: 24,
    height: 40,
    marginTop: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 24,
    fontFamily: "Syne-Regular",
    color: "white",
    fontSize: 16,
  },
});

export default CommuteScreen;