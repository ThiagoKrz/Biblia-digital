import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ChapterComponent = ({ bookId, chapterNumber }) => {
  const navigation = useNavigation();

  const handleVerse = (bookId, chapterNumber) => {
    navigation.navigate("verse", { bookId, chapterNumber });
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleVerse(bookId, chapterNumber)}
    >
      <Text style={styles.verse}>{chapterNumber}° Capítulo</Text>
    </TouchableOpacity>
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
});
export default ChapterComponent;
