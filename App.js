import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { View } from "react-native";
import { Text } from "react-native";

import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "./Components/VideoPlayer";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/icomoon.ttf"),
    "Syne-Regular": require("./assets/Fonts/Syne-Regular.ttf"),
    "Syne-SemiBold": require("./assets/Fonts/Syne-SemiBold.ttf"),
    "Syne-Bold": require("./assets/Fonts/Syne-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigator />;
  // return (
  //   <SafeAreaProvider>
  //     <SafeAreaView>
  //       {/* <Icon name="star" size={50} color="black" />
  //       <Text style={{ fontFamily: "Syne-Bold", fontSize: 36, margin: 16 }}>
  //         Discover
  //       </Text> */}
  //       <VideoPlayer />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}
