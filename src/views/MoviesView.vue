<script setup>
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
</template>

<style scoped>

</style>