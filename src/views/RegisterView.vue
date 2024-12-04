<script setup></script>

<template>
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <RouterLink to="/"><img id="logo" src="../images/Relicx Pure Logo (1).png" alt="Relicx Logo"></RouterLink>
        <a href="index.html" class="button login">Login</a>
      </div>
      <div class="form-container">
        <h2>Create an Account</h2>
        <form>
          <input type="first-name" placeholder="First Name" class="input-field" required>
          <input type="surname" placeholder="Surname" class="input-field" required>
          <input type="email" placeholder="Email" class="input-field" required>
          <input type="password" placeholder="Password" class="input-field" required>
          <input type="confirm-password" placeholder="Confirm Password" class="input-field" required>
          <button type="submit" class="button register">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero section */
.hero {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
}

/* Overlay with dark background */
.overlay {
  background-color: rgba(0, 0, 0, 0.6); /* Slightly less dark for contrast */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
}

/* Navbar styling */
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

#logo {
  width: 150px; /* Adjust logo size */
  transition: transform 0.3s ease;
}

#logo:hover {
  transform: scale(1.1); /* Slight hover effect for logo */
}

.navbar .login {
  background-color: #24b14a; /* Primary green */
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease;
}

.navbar .login:hover {
  background-color: #4da726; /* Secondary green */
  transform: scale(1.05);
}

/* Form container styling */
.form-container {
  text-align: center;
  margin-top: 40px;
  width: 100%;
  max-width: 400px;
}

.form-container h2 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
}

.input-field {
  padding: 16px;
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 1rem;
  background-color: #f4f4f4;
  transition: border-color 0.3s, box-shadow 0.3s ease;
}

.input-field:focus {
  border-color: #24b14a; /* Green on focus */
  box-shadow: 0 0 8px rgba(36, 177, 74, 0.8); /* Subtle green glow */
  outline: none;
}

/* Register button styling */
.register {
  background-color: #24b14a; /* Primary green */
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease;
}

.register:hover {
  background-color: #4da726; /* Secondary green */
  transform: scale(1.05);
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  .input-field {
    width: 90%;
  }

  .navbar h1 {
    font-size: 1.5rem;
  }

  #logo {
    width: 120px;
  }
}

@media (max-width: 600px) {
  .form-container h2 {
    font-size: 2rem;
  }

  .navbar {
    padding: 15px;
  }

  .navbar .login {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
