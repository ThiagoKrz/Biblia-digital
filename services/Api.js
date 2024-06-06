import axios from "axios";

const api = axios.create({
  baseURL: "https://www.abibliadigital.com.br/api",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJUaHUgSnVuIDA2IDIwMjQgMDI6MDE6NDAgR01UKzAwMDAuZmVsaXBlbWFyaW5ob2RlZnJlaXRhc0BnbWFpbC5jb20iLCJpYXQiOjE3MTc2MzkzMDB9.irYMgwfqIZcEpEyadTRPgRl0hMSK_5Jt72Z8_2IhoEY",
  },
});

export const getBooks = async () => {
  const response = await api.get("/books");

  const books = await response.data.map((book) => ({
    id: book.abbrev.pt,
    name: book.name,
    author: book.author,
    chapters: book.chapters,
  }));

  return books;
};

export const getVerses = async (bookId, chapter) => {
  const response = await api.get(`/verses/nvi/${bookId}/${chapter}`);

  const verses = await response.data.verses;

  return verses;
};
