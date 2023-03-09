<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
import StarsFalling from '../components/StarsFalling.vue'
</script>

<template>
  <StarsFalling />
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/Rocket Shop-logo.png" width="200" height="200" />

    <div class="wrapper">
      <HelloWorld msg="Welcome to Rocket Shop!" />

      <nav>
        <RouterLink class="nav text-gradient-reverse" to="/login">Login</RouterLink>
        <RouterLink class="nav text-gradient-reverse" to="/signup">Sign up</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 150%;
  overflow: hidden;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 32px;
  text-align: center;
}

nav a {
  font-size: 26px;
}

.nav:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>
