import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import { getVerses } from "../services/Api";
import VerseComponent from "../components/VerseComponent";

const VerseScreen = () => {
  const [verses, setVerses] = useState([]);

  const route = useRoute();
  const { bookId, chapterNumber } = route.params;

  useEffect(() => {
    fetchVerses();
  }, [verses]);

  const fetchVerses = async () => {
    try {
      if (verses.length === 0) {
        const response = await getVerses(bookId, chapterNumber);
        setVerses(response);
      }
    } catch (error) {
      console.error("Erro ao obter versos:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Versos</Text>
      </View>

      <View style={styles.items}>
        {verses.map((verse, index) => (
          <VerseComponent verse={verse} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#E8EAED",
    paddingHorizontal: 20,
  },

  tasksWrapper: {
    paddingHorizontal: 10,
    paddingTop: 50,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});

export default VerseScreen;
