import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";

const Route = ({ navigation }) => {
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
          <Text style={styles.subtitle}>Route</Text>
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
      <Image
        source={require("@/assets/Commute page/APW route.png")}
        style={styles.APWroute}
      ></Image>
      <View style={[{ flexDirection: "row" }]}>
        <Image
          source={require("@/assets/Button img/notif.png")}
          style={styles.notifBtn}
        />
        <Pressable
          onPress={() => {
            navigation.replace("Map");
          }}
        >
          <Image
            source={require("@/assets/Button img/start-commute.png")}
            style={styles.startCommute}
          />
        </Pressable>
      </View>
      <Text style={styles.subtitle2}>Your Commute Playlist</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          margin: 16,
          maxHeight: 230,
        }}
      >
        <Image
          style={styles.songCards}
          source={require("@/assets/Commute page/roadtrips.png")}
        />
        <Image
          style={styles.songCards}
          source={require("@/assets/Commute page/kpop.png")}
        />
        <Image
          style={styles.songCards}
          source={require("@/assets/Commute page/lovesick.png")}
        />
        <Image
          style={styles.songCards}
          source={require("@/assets/Commute page/heaven.png")}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  songCards: {
    marginRight: 4,
    width: 164,
    height: 205,
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
  subtitle2: {
    color: "white",
    fontSize: 24,
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 36,
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
  textRegular: {
    color: "white",
    fontSize: 16,
    fontFamily: "Syne-Regular",
    marginTop: 12,
    marginLeft: 16,
  },
  APWroute: {
    width: 345,
    height: 316,
    marginLeft: 20,
    marginTop: 40,
  },
  notifBtn: {
    width: 52,
    height: 50,
    marginTop: 44,
    marginLeft: 30,
  },
  startCommute: {
    width: 261,
    height: 45,
    marginTop: 44,
    marginLeft: 12,
  },
});

export default Route;
