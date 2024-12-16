<script setup>
import LoggedInHeader from "../components/LoggedInHeader.vue";
import Footer from '../components/Footer.vue';
import Genres from "../components/Genres.vue";
import { useRouter, RouterView } from 'vue-router';
import { useStore } from '../store';
import LoggedInHeader from "../components/LoggedInHeader.vue";

const store = useStore();
const router = useRouter();


</script>

<template>
  <div class="movie-gallery">

    <main class="movie-container">
      <RouterView />

    </main>
  </div>
  <LoggedInHeader />
  <Genres :genres="genresList" />
  <Footer />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  color: black;
}

.movie-gallery {
  display: flex;
  flex-direction: column;
}

.movie-container {
  flex-grow: 1;
}

footer {
  background-color: #3d7b22;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
}

.genres {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
}

.genre {
  background-color: #24b14a;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.genre:hover {
  background-color: #3d7b22;
}
</style>