import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { getBooks } from "../services/Api";
import BookComponent from "../components/BookComponent";

const BookScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [books]);

  const fetchBooks = async () => {
    try {
      if (books.length === 0) {
        const response = await getBooks();
        setBooks(response);
      }
    } catch (error) {
      console.error("Erro ao obter livros:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Biblias</Text>
      </View>

      <View style={styles.items}>
        {books.map((book, index) => (
          <BookComponent book={book} key={index} />
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

export default BookScreen;
