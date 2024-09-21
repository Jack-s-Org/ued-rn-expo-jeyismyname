import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";

import SuggestRoute from "./SuggestRoutes";
import React from "react";

const CommuteScreen = () => {
  const [number, onChangeNumber] = React.useState("");
  const [isAdded, setIsAdded] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        margin: 16,
        maxHeight: 173,
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <SuggestRoute setModalVisible={setModalVisible} />
      </Modal>

      {/* Card UI */}
      <Pressable onPress={() => setModalVisible(true)}>
        <ImageBackground
          style={styles.favLocation}
          source={require("@/assets/Commute page/favourites-bg.png")}
        >
          <View style={styles.box1}>
            <Image
              source={require("@/assets/Button img/favHome.png")}
              style={{
                width: 38,
                height: 38,
                marginRight: 8,
                marginLeft: 16,
                marginTop: 16,
              }}
            />
            <View style={{ marginTop: 12 }}>
              <Text style={styles.favTitle}>Home</Text>
              <Text style={styles.favSubtitle}>48 min | Arrive at 12:35</Text>
            </View>
            <TouchableOpacity style={styles.addBUtton} onPress={handlePress}>
              <Image
                style={styles.buttonStyle}
                source={
                  isAdded
                    ? require("@/assets/Button img/star-inactive.png") // New image for added state
                    : require("@/assets/Button img/star-active.png") // Default image
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require("@/assets/Button img/commute-home.png")}
              style={{
                width: 196,
                height: 60,
                marginHorizontal: 48,
                marginTop: 24,
              }}
            ></Image>
          </View>
        </ImageBackground>
      </Pressable>
      <ImageBackground
        style={styles.favLocation}
        source={require("@/assets/Commute page/favourites-bg2.png")}
      >
        <View style={styles.box1}>
          <Image
            source={require("@/assets/Button img/favWork.png")}
            style={{
              width: 38,
              height: 38,
              marginRight: 8,
              marginLeft: 16,
              marginTop: 16,
            }}
          />
          <View style={{ marginTop: 12 }}>
            <Text style={styles.favTitle}>Work</Text>
            <Text style={styles.favSubtitle}>30 min | Arrive at 10:20</Text>
          </View>
          <TouchableOpacity style={styles.addBUtton} onPress={handlePress}>
            <Image
              style={styles.buttonStyle}
              source={
                isAdded
                  ? require("@/assets/Button img/star-inactive.png") // New image for added state
                  : require("@/assets/Button img/star-active.png") // Default image
              }
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("@/assets/Button img/commute-home.png")}
            style={{
              width: 196,
              height: 60,
              marginHorizontal: 48,
              marginTop: 24,
            }}
          ></Image>
        </View>
      </ImageBackground>
      <ImageBackground
        style={styles.favLocation}
        source={require("@/assets/Commute page/favourites-bg3.png")}
      >
        <View style={styles.box1}>
          <Image
            source={require("@/assets/Button img/favSchool.png")}
            style={{
              width: 38,
              height: 38,
              marginRight: 8,
              marginLeft: 16,
              marginTop: 16,
            }}
          />
          <View style={{ marginTop: 12 }}>
            <Text style={styles.favTitle}>School</Text>
            <Text style={styles.favSubtitle}>30 min | Arrive at 10:20</Text>
          </View>
          <TouchableOpacity style={styles.addBUtton} onPress={handlePress}>
            <Image
              style={styles.buttonStyle}
              source={
                isAdded
                  ? require("@/assets/Button img/star-inactive.png") // New image for added state
                  : require("@/assets/Button img/star-active.png") // Default image
              }
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("@/assets/Button img/commute-home.png")}
            style={{
              width: 196,
              height: 60,
              marginHorizontal: 48,
              marginTop: 24,
            }}
          ></Image>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    margin: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#121212",
    borderRadius: 20,

    width: 393,
    height: 472,
  },
  box1: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#121212",
    display: "flex",
    flex: 1,
    // alignItems: "flex-start",
    // justifyContent: "start",
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
  favTitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "Syne-SemiBold",
  },
  favSubtitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Syne-Regular",
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
  favLocation: {
    marginRight: 12,
    width: 295,
    height: 173,
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
});

export default CommuteScreen;
