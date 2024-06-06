import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const VerseComponent = ({ verse }) => {
  return (
    <View
      style={styles.item}
      onPress={() => handleChapter(book.id, book.chapters)}
    >
      <Text style={styles.verse}>
        {verse.number}. {verse.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  verse: {
    fontWeight: "700",
  },
  author: {
    color: "#9ca3af",
  },
});
export default VerseComponent;
