<script setup> 
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="header">
        <RouterLink to="/"><img id="logo" src="../images/Relicx Pure Logo (1).png"></RouterLink>
        <RouterLink to="/login" class="Right">Log In</RouterLink>
        <RouterLink to="/register" class="Right">Register</RouterLink>
    </div>
</template>

<style scoped></style>