<script setup>
import { useRegistrationStore } from '../store';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const store = useRegistrationStore();
const router = useRouter();

const validateForm = (event) => {
  if (store.password !== store.rePassword) {
    event.preventDefault(); 
    alert('The passwords do not match. Please check and try again.');
  } else {
    store.setRegistrationData({
      firstName: store.firstName,
      lastName: store.lastName,
      email: store.email,
      password: store.password,
    });

    router.push('/movies')
  }
};
</script>

<template>
  <Header />
  <div class="form-container">
    <h2>Create an Account</h2>
      <form @submit="validateForm">
        <input type="text" placeholder="First Name" class="input-field" v-model="store.firstName" required />
        <input type="text" placeholder="Last Name" class="input-field" v-model="store.lastName" required />
        <input type="email" placeholder="Email" class="input-field" v-model="store.email" required />
        <input type="password" placeholder="Password" class="input-field" v-model="store.password" required />
        <input type="password" placeholder="Re-Enter Password" class="input-field" v-model="store.rePassword" required />
        <button type="submit" class="register">Register</button>
      </form>
    </div>
    <Footer />
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 20px;
  max-width: 400px;
  background-color: #3d7b22;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  color: white;
  margin-bottom: 20px;
  font-size: 1.8rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-field {
  background-color: white;
  border: 1px solid #24b14a;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  color: black;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #24b14a;
  box-shadow: 0 0 8px rgba(36, 177, 74, 0.6);
}

.register {
  background-color: #24b14a;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.register:hover {
  background-color: #3d7b22;
  transform: scale(1.05);
}

.register:active {
  background-color: #1e5d11;
}

form button:focus {
  outline: none;
}
</style>
