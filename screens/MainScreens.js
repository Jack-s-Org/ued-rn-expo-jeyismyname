import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";

import { BlurView } from "expo-blur";
import React from "react";
import CommuteScreen from "./CommuteScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <AppDrawer navigation={navigation}>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 12,
              alignSelf: "center",
              borderRadius: 20,
              width: 362,
              height: 78,
              backgroundColor: "transparent",
              marginHorizontal: 16,
              padding: 4,
            },
            tabBarActiveTintColor: "#FFFFFF",
            tabBarBackground: () => (
              <BlurView
                tint="dark"
                intensity={80}
                style={StyleSheet.absoluteFill}
              />
            ),
          }}
        >
          <Tab.Screen
            name="Discover"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={
                    require("@/assets/icomoon/discover.png") // New image for added state
                  } // Default image
                  style={{ width: 34, height: 34 }}
                />
              ),
              // tabBarLabel: "Discover",
            }}
          />

          <Tab.Screen
            name="Search"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="search" size={size} color={color} />
              ),
              tabBarLabel: "Search",
            }}
          />

          <Tab.Screen
            name="Add"
            component={CommuteScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add" size={size} color={color} />
              ),
              tabBarLabel: "Commute",
            }}
          />

          <Tab.Screen
            name="Inbox"
            component={NotificationsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbox" size={size} color={color} />
              ),
              tabBarLabel: "Playlist",
              tabBarBadge: unreadCount,
            }}
            listeners={{
              tabPress: () => {
                setUnreadCount(null);
              },
            }}
          />

          <Tab.Screen
            name="SettingsDrawer"
            component={MeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
              tabBarLabel: "Account",
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
