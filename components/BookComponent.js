import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookComponent = ({ book }) => {
  const navigation = useNavigation();

  const handleBook = (bookId, chapters) => {
    navigation.navigate("chapter", { bookId, chapters });
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleBook(book.id, book.chapters)}
    >
      <Text style={styles.name}>{book.name}</Text>
      <Text style={styles.author}>{book.author}</Text>
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
  name: {
    fontWeight: "700",
  },
  author: {
    color: "#9ca3af",
  },
});
export default BookComponent;
