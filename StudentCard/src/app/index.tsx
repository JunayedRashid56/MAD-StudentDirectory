import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <StatusBar style="dark" />

            {/* First card — your own data */}
            <ProfileCard name="Asadul Haque" studentId="22-12345-1" department="Computer Science — AIUB" bio="Passionate about mobile development and building tools that make everyday life easier." />

            {/* Second card — a classmate's data (same component, different props!) */}
            <ProfileCard name="Rakib Rahman" studentId="22-67890-2" department="Computer Science — AIUB" bio="Interested in AI and full-stack web development. Loves competitive programming." />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F0F4F8",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 40,
    },
});
