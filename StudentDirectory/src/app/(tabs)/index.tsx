// app/(tabs)/index.tsx

import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import StudentItem from "@/components/student-item";
import { Student, STUDENTS } from "@/data/students";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/search-bar";
import { useState } from "react";
import StudentDetail from "@/components/student-detail";
import AddStudentForm from "@/components/add-student-form";

export default function HomeScreen() {
  const [query, setQuery] = useState<string>("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // NEW: local student list state and view switcher
  const [students, setStudents] = useState<Student[]>(STUDENTS);
  const [showForm, setShowForm] = useState(false);

  const handleSelect = (student: Student) => {
    setSelectedStudent((prev) => (prev?.id === student.id ? null : student));
  };

  const handleNewStudent = (newStudent: Student) => {
    setStudents((prev) => [newStudent, ...prev]);
    setShowForm(false);
  };

  if (showForm) {
    return <AddStudentForm onSubmitSuccess={handleNewStudent} />;
  }

  const filtered = students.filter((s) => {
    return (
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.department.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Student Directory</Text>
        <Pressable style={styles.addButton} onPress={() => setShowForm(true)}>
          <Text style={styles.addButtonText}>+ Add</Text>
        </Pressable>
      </View>

      <SearchBar value={query} onChangeText={setQuery} />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <StudentItem
            student={item}
            onPress={handleSelect}
            isSelected={selectedStudent?.id === item.id}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No students match "{query}"</Text>
          </View>
        }
      />

      {selectedStudent && <StudentDetail student={selectedStudent} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#0D1F4E",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  addButton: {
    backgroundColor: "#0D9488",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 13,
  },
  empty: {
    padding: 40,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#94A3B8",
  },
});
