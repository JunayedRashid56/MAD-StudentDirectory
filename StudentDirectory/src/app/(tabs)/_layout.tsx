import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0D9488",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: { backgroundColor: "#FFFFFF", borderTopColor: "#F1F5F9" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="newspaper-outline"
              size={size}
              color={String(color)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="bookmark-outline"
              size={size}
              color={String(color)}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add-student"
        options={{
          title: "Add Student",
          href: null, // hides from tab bar
          headerShown: true,
          headerTitle: "Join the Directory",
          headerStyle: { backgroundColor: "#0D1F4E" },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Tabs>
  );
}
