<template>
  <StarsFalling />
  <div id="container">
    <img
      alt="Vue logo"
      class="logo animate-pulse"
      src="@/assets/Rocket Shop-logo.png"
      width="90"
      height="90"
    />
    <h2>Login to your account</h2>
    <form>
      <label
        ><span>Username</span> <br /><input
          v-model="username"
          @focus="userFocused = true"
          :class="{ focus: userFocused, 'has-val': username }"
          type="text" /></label
      ><br />
      <label
        ><span>Password</span> <br /><input
          v-model="password"
          @focus="passFocused = true"
          class
          :class="{ focus: passFocused, 'has-val': password }"
          type="password"
      /></label>
    </form>
    <!-- <button type="submit">Submit</button> -->
  </div>
</template>

<script lang="ts" setup>
import StarsFalling from './StarsFalling.vue'
import { ref } from 'vue'

const userFocused = ref(false)
const passFocused = ref(false)
const username = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}



.focus {
  outline: none !important;
  color: black;
}
.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
}

.logo {
  margin: 4%;
}

#container {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  align-items: center;
  width: 30vw;
  height: 60vh;
  top: 30%;
  left: 50%;
  padding: 3px;
  border: 1px solid red;
}

span {
  margin-left: -12%;
}

input {
  margin: 3%;
  width: 110%;
}

h2 {
  margin: 7%;
  margin-top: -0.7rem;
  font-size: 24px;
}
</style>
