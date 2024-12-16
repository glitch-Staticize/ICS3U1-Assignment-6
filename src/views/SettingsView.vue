<script setup>
import { useRegistrationStore } from '../store';
import { computed } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const userStore = useRegistrationStore();

const firstName = computed({
  get: () => userStore.firstName,
  set: (value) => {
    userStore.firstName = value;
  },
});
const lastName = computed({
  get: () => userStore.lastName,
  set: (value) => {
    userStore.lastName = value;
  },
});
const email = computed({
  get: () => userStore.email,
  set: (value) => {
    userStore.email = value;
  },
});

const updateProfileHandler = (event) => {
  event.preventDefault();
  userStore.setRegistrationData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  });

  alert('Profile updated');
}
</script>

<template>
  <Header />
  <div class="form-container">
    <h1>User Profile</h1>
    <form @submit="updateProfileHandler">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" class="input-field" v-model="firstName" /><br /><br />
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" class="input-field" v-model="lastName" /><br /><br />
      <label for="email">Email:</label>
      <input type="email" id="email" class="input-field" v-model="email" readonly/><br /><br />
      <button type="submit" class="button">Save Changes</button>
    </form>
  </div>
  <Footer />
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 60px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
} 

.form-container h1 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.form-container form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  gap: 15px;
} 

.input-field {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
} 

.input-field:focus {
  outline: none;
  border-color: #24b14a;
  box-shadow: 0 0 5px rgba(36, 177, 74, 0.5);
}

.button {
  background-color: rgb(81, 165, 78);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.button:hover {
  transform: scale(1.05);
  background-color: #3d7b22;
} 

.button:active {
  transform: scale(1);
}

label {
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
  text-align: left;
}
</style>