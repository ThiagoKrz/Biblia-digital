import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import ChapterComponent from "../components/ChapterComponent";

const ChapterScreen = () => {
  const route = useRoute();
  const { bookId, chapters } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Capitulos</Text>
      </View>

      <View style={styles.items}>
        {[...Array(chapters)].map((_, index) => (
          <ChapterComponent
            bookId={bookId}
            chapterNumber={index + 1}
            key={index}
          />
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

export default ChapterScreen;
