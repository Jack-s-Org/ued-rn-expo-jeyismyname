import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";

const Map = ({ navigation }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[{ backgroundColor: "#1D1F24", borderRadius: 16 }]}>
        <View style={[{ flexDirection: "row" }]}>
          <Pressable
            onPress={() => {
              navigation.navigate("MainTabs", { screen: "Add" });
            }}
          >
            <Image
              style={styles.backBtn}
              source={require("@/assets/Button img/back-button-light.png")}
            />
          </Pressable>
          <Text style={styles.subtitle}>Map</Text>
          <Image
            style={styles.buttonStyle2}
            source={require("@/assets/Commute page/bell.png")}
          />
        </View>
        <View
          style={[
            { flexDirection: "row", paddingBottom: 28, borderRadius: 20 },
          ]}
        >
          <TouchableOpacity style={styles.addBUtton} onPress={handlePress}>
            <Image
              style={styles.buttonStyle}
              source={
                isAdded
                  ? require("@/assets/Button img/star-active.png") // New image for added state
                  : require("@/assets/Button img/star-inactive.png") // Default image
              }
            />
          </TouchableOpacity>
          <Text style={styles.textRegular}>
            35 mins | Arrival time: 12:30 - 12:40
          </Text>
        </View>
      </View>
      <ImageBackground
        source={require("@/assets/Commute page/map.png")}
        style={styles.map}
      >
        <Image
          source={require("@/assets/Commute page/KLCC track.png")}
          style={styles.KLCC}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  songCards: {
    marginRight: 4,
    width: 164,
    height: 230,
  },
  container: {
    backgroundColor: "#121212",
    display: "flex",
    flex: 1,
  },
  subtitle: {
    color: "white",
    fontSize: 32,
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 60,
  },

  backBtn: {
    width: 42,
    height: 42,
    marginLeft: 16,
    marginTop: 60,
  },
  buttonStyle: {
    width: 26,
    height: 26,
    marginTop: 12,
    marginLeft: 20,
  },
  buttonStyle2: {
    width: 26,
    height: 26,
    marginTop: 78,
    marginLeft: 180,
  },
  map: {
    width: 391,
    height: 650,
  },
  KLCC: {
    width: 390,
    height: 169,
    marginTop: "auto",
  },
  textRegular: {
    color: "white",
    fontSize: 16,
    fontFamily: "Syne-Regular",
    marginTop: 12,
    marginLeft: 16,
  },
});

export default Map;
