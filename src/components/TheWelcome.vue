<script setup>
import WelcomeItem from './WelcomeItem.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const grad = ref(false)
const count = ref(0)
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <Transition>
        <img
          v-if="!grad"
          @mouseover="grad = !grad"
          src="@/assets/book.png"
          width="35"
          height="35"
        />
        <img v-else @mouseover="grad = !grad" src="@/assets/book-grad.png" width="35" height="35" />
      </Transition>
    </template>
    <template #heading>
      <Transition>
        <RouterLink to="/" v-bind:class="[grad ? 'grad' : 'head']"> Books </RouterLink>
      </Transition>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="@/assets/clothing.png" width="35" height="35" />
    </template>
    <template #heading
      ><Transition>
        <RouterLink to="/" v-bind:class="[grad ? 'grad' : 'head']"> Clothing </RouterLink>
      </Transition></template
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="@/assets/jewelry.png" width="35" height="35" />
    </template>
    <template #heading
      ><Transition>
        <RouterLink to="/" v-bind:class="[grad ? 'grad' : 'head']"> Jewelry </RouterLink>
      </Transition></template
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img src="@/assets/sportswear.png" width="35" height="35" />
    </template>
    <template #heading
      ><Transition>
        <RouterLink to="/" v-bind:class="[grad ? 'grad' : 'head']"> Sports Wear </RouterLink>
      </Transition></template
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Transition>
        <img
          v-if="!grad"
          @mouseover="grad = !grad"
          src="@/assets/videogames.png"
          width="35"
          height="35"
        />
        <img
          v-else
          @mouseover="grad = !grad"
          src="@/assets/videogames-grad.png"
          width="35"
          height="35"
        />
      </Transition>
    </template>
    <template #heading
      ><Transition>
        <RouterLink to="/" v-bind:class="[grad ? 'grad' : 'head']"> Video Games </RouterLink>
      </Transition></template
    >
  </WelcomeItem>
</template>

<style>
.head {
  text-decoration: none;
  color: white;
  font-weight: 540;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s;
  position: fixed;
}

.grad {
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(90deg, hsl(324, 86%, 47%), hsl(27, 99%, 55%), hsl(313, 67%, 36%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
