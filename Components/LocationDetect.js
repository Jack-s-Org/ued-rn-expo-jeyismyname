import { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function LocationDetect() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("Waiting...");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // Reverse geocoding to get the city name
      let address = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      if (address.length > 0) {
        setCity(address[0].street || "Unknown Location");
      }
    })();
  }, []);

  let text = errorMsg ? errorMsg : city;

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    marginTop: 18,
  },
  paragraph: {
    fontFamily: "Syne-Regular",
    fontSize: 16,
    textAlign: "left",
    color: "white",
    backgroundColor: "#121212",
    padding: 10,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
    width: 237,
    height: 40,
  },
});
