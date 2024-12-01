<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="hero">
        <div class="overlay">
            <div class="navbar">
                <h1>Relicx</h1>
                <div class="nav-buttons">
                    <RouterLink to="/register" class="button register">Register</RouterLink>
                    <RouterLink to="/login" class="button login">Login</RouterLink>
                </div>
            </div>
            <div class="hero-content">
                <h2>Watch Anywhere, Anytime</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <input type="email" placeholder="Email address" class="email-input">
                <button class="button join">Get Started</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero {
    background-image: url('https://source.unsplash.com/random/1920x1080/?movie');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f0f0f0;
    padding: 20px;
}

.navbar {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between; /* Separate the title and buttons */
    align-items: center;
    padding: 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    z-index: 100;
}

.navbar h1 {
    margin: 0;
    font-size: 3rem;
    color: #3d7b22;
    font-weight: bold;
}

.nav-buttons {
    display: flex;
    gap: 15px; /* Adds spacing between the buttons */
}

.nav-buttons .button {
    background-color: #3d7b22;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.nav-buttons .button:hover {
    background-color: #24b14a;
    transform: scale(1.05);
}

.hero-content {
    text-align: center;
    margin-top: 80px;
}

.hero-content h2 {
    font-size: 3.5rem;
    color: #f0f0f0;
    margin-bottom: 20px;
    font-weight: bold;
}

.hero-content p {
    font-size: 1.2rem;
    color: #cccccc;
    margin-bottom: 30px;
}

.email-input {
    padding: 12px;
    width: 320px;
    border-radius: 5px;
    border: none;
    margin-bottom: 15px;
    font-size: 1rem;
    color: #333;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.email-input::placeholder {
    color: #aaa;
}

.join {
    background-color: #35b254;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.join:hover {
    background-color: #1da947;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .hero-content h2 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .email-input {
        width: 100%;
        max-width: 280px;
    }

    .join {
        width: 100%;
        max-width: 280px;
    }
}
</style>
