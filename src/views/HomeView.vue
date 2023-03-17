<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HelloWorld from '../components/HelloWorld.vue'
import StarsFalling from '../components/StarsFalling.vue'
import ItemCard from '../components/ItemCard.vue'

import { ref } from 'vue'

const data = ref([])

fetch('https://fakestoreapi.com/products?limit=3')
  .then((res) => res.json())
  .then((json) => {
    data.value = json
  })
</script>

<template>
  <!-- <StarsFalling /> -->
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/Circuit-transformed.png"
      width="200"
      height="200"
    />
    <nav>
      <ul>
        <li><RouterLink class="nav text-gradient-reverse" to="/login">Login</RouterLink></li>
        <li><RouterLink class="nav text-gradient-reverse" to="/signup">Sign up</RouterLink></li>
        <li><RouterLink class="nav text-gradient-reverse" to="/login">Login</RouterLink></li>
        <li><RouterLink class="nav text-gradient-reverse" to="/signup">Sign up</RouterLink></li>
      </ul>
    </nav>
  </header>
  <!-- <TheWelcome /> -->
  <!-- <div id="items">
    <div v-for="item in data" class="item" :keys="item.id">
      <ItemCard :item="item" />
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo {
  /* margin: 0; */
  /* position: relative; */
  top: 0;
  left: 0;
  width: 12rem;
  height: 12rem;
  margin-top: -2%;
  margin-left: -2%;
}

nav {
  width: 100%;
  font-size: 32px;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  margin: 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  /* padding: 16px; */
  text-decoration: none;
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

#items {
  text-align: center;
  width: 100vw;
  height: auto;
  margin: 3%;
  margin-top: 4%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  margin: 1%;
  margin-bottom: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    /* margin: 0 2rem 0 0; */
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

    padding: 0 1rem;
  }
}
</style>
