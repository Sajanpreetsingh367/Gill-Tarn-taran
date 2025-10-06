
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [selectedExam, setSelectedExam] = useState(null);

  if (screen === "welcome") {
    return (
      <View style={[styles.container, { backgroundColor: "#FFD700" }]}>
        <Image
          source={{ uri: "https://i.postimg.cc/Pf08JGn1/Screenshot-2025-10-05-17-33-28-667-edit-com-miui-gallery.jpg" }}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Study Discussion Club</Text>
        <TouchableOpacity style={styles.button} onPress={() => setScreen("signup")}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "signup") {
    const isFormFilled = Object.values(signupData).every((val) => val.trim() !== "");
    return (
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: "#89CFF0" }]}>
        <Text style={styles.header}>Signup</Text>
        <TextInput placeholder="Username" style={styles.input} onChangeText={(t) => setSignupData({ ...signupData, username: t })} />
        <TextInput placeholder="Email" style={styles.input} onChangeText={(t) => setSignupData({ ...signupData, email: t })} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={(t) => setSignupData({ ...signupData, password: t })} />

        <TouchableOpacity style={[styles.button, { backgroundColor: isFormFilled ? "#007AFF" : "gray" }]} disabled={!isFormFilled} onPress={() => setScreen("examlist")}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setScreen("login")}>
          <Text style={styles.linkText}>Already have an account?</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (screen === "login") {
    return (
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: "#D3D3D3" }]}>
        <Text style={styles.header}>Login</Text>
        <TextInput placeholder="Username" style={styles.input} onChangeText={(t) => setLoginData({ ...loginData, username: t })} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={(t) => setLoginData({ ...loginData, password: t })} />

        <TouchableOpacity style={styles.button} onPress={() => setScreen("examlist")}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  if (screen === "examlist") {
    const exams = ["UPSC", "NEET", "JEE", "BOARD EXAM"];
    return (
      <View style={[styles.container, { backgroundColor: "#FF7F7F" }]}>
        <Text style={styles.header}>Exam List</Text>
        {exams.map((exam) => (
          <TouchableOpacity key={exam} style={[styles.examBox, { backgroundColor: selectedExam === exam ? "#FF4500" : "#fff" }]} onPress={() => setSelectedExam(exam)}>
            <Text>{exam}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, { backgroundColor: selectedExam ? "#007AFF" : "gray" }]} disabled={!selectedExam} onPress={() => setScreen("home")}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "home") {
    return (
      <View style={[styles.container, { backgroundColor: "#f0f0f0" }]}>
        <Text style={styles.header}>Home</Text>
        <Text>📌 Current Affairs</Text>
        <Text>📝 Practice Questions</Text>
        <Text>🎤 Interview Practice</Text>
        <Text>📚 Quick Books Revise</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  logo: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", width: "100%", padding: 10, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: "#007AFF", padding: 12, borderRadius: 8, marginTop: 10, width: "100%", alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  linkText: { color: "#007AFF", marginTop: 15 },
  examBox: { padding: 15, borderWidth: 1, borderColor: "#ccc", borderRadius: 10, marginVertical: 8, width: "100%", alignItems: "center" },
});
