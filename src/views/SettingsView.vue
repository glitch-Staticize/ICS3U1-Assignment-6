<script setup>
import LoggedInHeader from "../components/LoggedInHeader.vue";
import Footer from '../components/Footer.vue';
import { useStore } from '../store';
import { ref, computed, onMounted } from 'vue';

const store = useStore();

const currentUserDetails = computed(() => {
  return store.accounts.get(store.currentUserEmail) || {};
});

const firstName = ref('');
const lastName = ref('');
const email = ref('');

onMounted(() => {
  const user = currentUserDetails.value;
  firstName.value = user.firstName || '';
  lastName.value = user.lastName || '';
  email.value = store.currentUserEmail || '';
});

function saveChanges() {
  const userAccount = store.accounts.get(store.currentUserEmail);

  if (userAccount) {
    userAccount.firstName = firstName.value;
    userAccount.lastName = lastName.value;

    store.accounts.set(store.currentUserEmail, userAccount);

    alert('Changes saved');
  } else {
    alert('User not found');
  }
}
</script>

<template>
  <LoggedInHeader />
  <div class="layout">
    <div class="settings-container">
      <div class="settings-input">
        <h2>Settings</h2>
        <div>
          <h4>First Name</h4>
          <input v-model="firstName" type="text" class="input-field" required />
        </div>
        <div>
          <h4>Last Name</h4>
          <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required />
        </div>
        <div>
          <h4>Email</h4>
          <input v-model="email" type="email" placeholder="Email" class="input-field" disabled />
        </div>
        <button class="btn btn-primary" @click="saveChanges">Save Changes</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
  color: black;
}

.settings-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #3d7b22;
}

.settings-input {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  width: 100%;
}

.settings-input h2 {
  color: #3d7b22;
  font-size: 24px;
  margin-bottom: 20px;
}

.settings-input h4 {
  color: black;
  margin: 10px 0;
  font-size: 16px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #3d7b22;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  color: black;
}

.input-field:disabled {
  background-color: #e0e0e0;
  color: #888;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #24b14a;
  color: white;
}

.btn-primary:hover {
  background-color: #3d7b22;
}

.btn-primary:active {
  background-color: black;
  color: white;
}
</style>
