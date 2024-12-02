<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);

onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
    <h1>
        Featured Movies
    </h1>
    <div class="flexbox-container">
        <div v-if="response" class="movie-list">
            <div v-for="movie in response.data.results.slice(0, 5)" :key="movie.id" class="flexbox-item"
                @click="getMovieDetails(movie.id)">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" />
                <p class="movie-title">{{ movie.title }}</p>
            </div>
        </div>
    </div>
    <div class="movie-gallery">

    </div>
</template>

<style scoped>
.flexbox-container {
    display: flex;
    flex-direction: column;
    /* Stack the heading and movies vertically */
    align-items: center;
    /* Centers the content horizontally */
    gap: 40px;
    /* Adds space between the heading and the movies */
    min-height: 100vh;
    /* Makes the container take up the full viewport height */
    padding: 20px;
    background-color: #000;
    /* Black background for contrast */
}

h1 {
    font-size: 3.5rem;
    text-align: center;
    margin: 0;
    color: #24b14a;
    /* Dark green for the heading */
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.movie-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* Wrap movies to the next row if needed */
    gap: 40px;
    /* Space between movies */
}

.flexbox-item {
    flex: 0 1 225px;
    /* Increased the flex-basis to 250px for larger cards */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #3d7b22;
    /* Dark green background for the movie cards */
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
}

.flexbox-item:hover {
    transform: translateY(-10px);
    /* Slight lift on hover */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.7);
}

.flexbox-item img {
    width: 100%;
    /* Ensures the image takes up the full width of the container */
    height: auto;
    /* Maintains the image aspect ratio */
    max-height: 350px;
    /* Limits the height of the images for consistency */
    object-fit: cover;
    /* Ensures the images cover the area without distorting */
    border-bottom: 5px solid #24b14a;
    /* Light green separator under the image */
}

.movie-title {
    margin-top: 10px;
    font-size: 1rem;
    color: #ffffff;
    /* White text for readability */
    font-weight: bold;
    padding: 10px 0;
    background-color: #24b14a;
    /* Light green background for the title */
    width: 100%;
}
</style>