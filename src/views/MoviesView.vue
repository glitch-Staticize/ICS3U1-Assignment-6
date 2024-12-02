<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Genres from "../components/Genres.vue";

const genresList = [
  {
    id: 28,
    genreName: "Action"
  },
  {
    id: 16,
    genreName: "Animation"
  },
  {
    id: 10752,
    genreName: "War"
  },
  {
    id: 878,
    genreName: "Sci-Fi"
  },
  {
    id: 36,
    genreName: "History"
  },
]
</script>

<template>
  <Genres :genres="genresList" />
  <Header />
  <Footer />
</template>

<style scoped></style>