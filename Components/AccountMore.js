import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Share,
  Alert,
} from "react-native";
import React from "react";

const AccountMore = (props) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "JOOX App | Add me at JOOX accout! My name is John Doe",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <Pressable style={styles.overlay} onPress={props.onClose}>
      <View style={styles.centeredView}>
        <Pressable style={styles.modalView} onPress={() => {}}>
          {/* Modal content */}
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 32,
                marginTop: 24,
              },
            ]}
          >
            <Image
              source={require("@/assets/Account page/user-plus.png")}
              style={[{ width: 28, height: 28 }]}
            />
            <Text style={styles.body2}>Find Friends</Text>
          </View>
          <Pressable onPress={onShare}>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 32,
                  marginTop: 24,
                },
              ]}
            >
              <Image
                source={require("@/assets/Account page/share.png")}
                style={[{ width: 28, height: 28 }]}
              />
              <Text style={styles.body2}>Share</Text>
            </View>
          </Pressable>
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 32,
                marginTop: 24,
              },
            ]}
          >
            <Image
              source={require("@/assets/Account page/brush.png")}
              style={[{ width: 28, height: 28 }]}
            />
            <Text style={styles.body2}>Edit Profile</Text>
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  body2: {
    color: "white",
    fontSize: 20,
    fontFamily: "Syne-Regular",
    marginLeft: 16,
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
    height: 210,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
});

export default AccountMore;
