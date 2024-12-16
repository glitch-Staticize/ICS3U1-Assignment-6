import { ref, } from "vue"
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
  const cart = ref(new Map());

  function addToCart(id, movieData) {
    cart.value.set(id, movieData);
  }

  function removeFromCart(id) {
    cart.value.delete(id);
  }

  return {
    cart,
    addToCart,
    removeFromCart,
  };
});

export const useRegistrationStore = defineStore('registration', () => {
  const firstName = ref('');
  const surname = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  const setRegistrationData = (data) => {
    firstName.value = data.firstName;
    surname.value = data.surname;
    email.value = data.email;
    password.value = data.password;
  };

  return {
    firstName,
    surname,
    email,
    password,
    setRegistrationData,
  };
});