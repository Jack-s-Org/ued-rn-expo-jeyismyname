import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  return (
    <ImageBackground
      source={require("@/assets/Background img/bg1.png")}
      style={styles.image}
    >
      <Text style={styles.pagetitle}>Account</Text>
      <View style={styles.container}>
        <Image
          source={require("@/assets/Account page/poom.png")}
          style={styles.profile}
        />
        <View>
          <Text style={styles.subtitle}>John Doe</Text>
          <Text style={styles.body1}>0 followers | 23 following</Text>
        </View>
        <Image
          source={require("@/assets/Button img/more.png")}
          style={styles.more}
        />
      </View>

      {/* Pressable content */}
      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 32,
            marginTop: 36,
          },
        ]}
      >
        <Image
          source={require("@/assets/Account page/settings-light.png")}
          style={[{ width: 28, height: 28 }]}
        />
        <Text style={styles.body2}>Settings and Privacy</Text>
      </View>

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
          source={require("@/assets/Account page/history-light.png")}
          style={[{ width: 28, height: 28 }]}
        />
        <Text style={styles.body2}>Listening History</Text>
      </View>
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
          source={require("@/assets/Account page/add-acc.png")}
          style={[{ width: 28, height: 28 }]}
        />
        <Text style={styles.body2}>Add Account</Text>
      </View>
      <View style={[{ alignItems: "center" }]}>
        <View style={styles.logOut}>
          <Text
            style={[
              {
                fontFamily: "Syne-Regular",
                color: "white",
                fontSize: 20,
                paddingHorizontal: 20,
                paddingVertical: 4,
              },
            ]}
          >
            Log Out
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logOut: {
    borderColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    width: 120,
    height: 40,
    marginTop: 46,
  },
  more: {
    width: 20,
    height: 20,
    marginTop: 24,
  },
  profile: {
    width: 96,
    height: 96,
  },
  container: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 16,
  },
  image: {
    width: 390,
    height: 844,
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
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 20,
  },
  body1: {
    color: "gray",
    fontSize: 16,
    fontFamily: "Syne-Regular",
    marginLeft: 16,
    marginTop: 4,
  },
  body2: {
    color: "white",
    fontSize: 20,
    fontFamily: "Syne-Regular",
    marginLeft: 16,
  },
});

export default Account;
