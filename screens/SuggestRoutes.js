import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import LocationDetect from "@/Components/LocationDetect";
import { useNavigation } from "@react-navigation/native";

const SuggestRoutes = (props) => {
  const navigation = useNavigation();
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "flex-start",
            },
          ]}
        >
          <Pressable onPress={() => props.setModalVisible(false)}>
            <Image
              source={require("@/assets/Button img/back-light.png")}
              style={styles.buttonStyle2}
            />
          </Pressable>
          <Image
            source={require("@/assets/Button img/currentloc.png")}
            style={styles.buttonStyle2}
          />
          <View>
            <LocationDetect />
          </View>
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "flex-start",
            },
          ]}
        >
          <Image
            source={require("@/assets/Button img/location-yellow.png")}
            style={[{ marginLeft: 64, marginTop: 8, width: 28, height: 28 }]}
          />
          <TextInput
            style={styles.destination}
            onChangeText={onChangeNumber}
            value={Text}
            placeholder="Your Destination"
            placeholderTextColor="white"
          />
          <Image
            source={require("@/assets/Button img/exchange.png")}
            style={[{ marginLeft: 8, marginTop: 8, width: 28, height: 28 }]}
          />
        </View>
        <Text style={styles.subtitle}>Suggested Routes</Text>
        <Pressable
          onPress={() => {
            navigation.replace("Route", { screen: "SuggestRoutes" });
          }}
        >
          <ImageBackground
            source={require("@/assets/Library page/suggest-container.png")}
            style={[
              {
                width: 354,
                height: 64,
                alignSelf: "center",
                marginTop: 12,
              },
            ]}
          >
            <View style={[styles.songFrame]}>
              <View style={[styles.parentFlexBox]}>
                <Image
                  style={[styles.artistImage]}
                  source={require("@/assets/Button img/train-green.png")}
                />
                <View style={styles.textFrame}>
                  <Text
                    style={[styles.songTitle]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    30 mins | Arrival time: 12:30
                  </Text>
                  <Text
                    style={[styles.artistName]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Leaves in 5 min from Taman Paramount
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Pressable>
        <ImageBackground
          source={require("@/assets/Library page/suggest-container.png")}
          style={[
            {
              width: 354,
              height: 64,
              alignSelf: "center",
              marginTop: 12,
            },
          ]}
        >
          <View style={[styles.songFrame]}>
            <View style={[styles.parentFlexBox]}>
              <Image
                style={[styles.artistImage]}
                source={require("@/assets/Button img/train-green.png")}
              />
              <View style={styles.textFrame}>
                <Text
                  style={[styles.songTitle]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  30 mins | Arrival time: 12:30
                </Text>
                <Text
                  style={[styles.artistName]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Leaves in 5 min from Taman Paramount
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require("@/assets/Library page/suggest-container.png")}
          style={[
            {
              width: 354,
              height: 64,
              alignSelf: "center",
              marginTop: 12,
            },
          ]}
        >
          <View style={[styles.songFrame]}>
            <View style={[styles.parentFlexBox]}>
              <Image
                style={[styles.artistImage]}
                source={require("@/assets/Button img/train-green.png")}
              />
              <View style={styles.textFrame}>
                <Text
                  style={[styles.songTitle]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  30 mins | Arrival time: 12:30
                </Text>
                <Text
                  style={[styles.artistName]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  Leaves in 5 min from Taman Paramount
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    width: 200,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 16,
  },
  songTitle: {
    width: 195,
    fontSize: 16,
    fontFamily: "Syne-Regular",
    color: "#fff",
  },
  artistName: {
    fontSize: 12,
    fontFamily: "Syne-Regular",
    color: "#878787",
    width: 245,
    marginTop: 4,
  },
  artistImage: {
    width: 30,
    height: 35,
    resizeMode: "cover",
  },

  textFrame: {
    height: 47,
    marginLeft: 12,
  },
  songFrame: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    // margin: 20,
    backgroundColor: "#121212",
    borderRadius: 20,

    width: 393,
    height: 440,
  },

  input: {
    borderColor: "white",
    borderRadius: 24,
    height: 40,
    width: 237,
    marginTop: 32,
    marginLeft: 16,
    borderWidth: 1,
    padding: 10,
    fontFamily: "Syne-Regular",
    color: "white",
    fontSize: 16,
  },
  destination: {
    borderColor: "white",
    borderRadius: 24,
    height: 40,
    width: 237,
    marginTop: 4,
    marginLeft: 16,
    borderWidth: 1,
    padding: 10,
    fontFamily: "Syne-Regular",
    color: "white",
    fontSize: 16,
  },
  buttonStyle: {
    width: 26,
    height: 26,
    marginTop: 26,
    marginLeft: 16,
  },
  buttonStyle2: {
    width: 28,
    height: 28,
    marginTop: 32,
    marginLeft: 18,
  },
  dropdown: {
    backgroundColor: "#252525",
    width: 137,
    height: 35,
    borderRadius: 50,
  },
});

export default SuggestRoutes;
