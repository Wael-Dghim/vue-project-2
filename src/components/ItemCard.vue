<script setup lang="ts">
defineProps<{
  item: object
}>()
</script>

<template>
  <div class="card">
    <img class="img" :src="item.image" width="200" />
    <h3 class="name">{{ item.title }}</h3>
    <button class="add">
      <img src="@/assets/add-to-cart.png" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.add {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: #1d1f20;
  border: 1px solid black;
  z-index: 3;
  width: 38px;
  height: 38px;
  float: right;
  padding: 1%;
  :hover {
    background: #282829;
  }
}
.card {
  width: 20rem;
  height: 21rem;
  --borderWidth: 2px;
  background: #1d1f20;
  /* border-radius: 11%; */
  margin: 2%;
  margin-top: -12px;
  padding: 1%;
}
.card:after {
  content: '';
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes move-bg {
  to {
    background-position: 200% center;
  }
}

.img {
  margin: 2%;
  margin-bottom: 10px;
  margin-left: 19%;
  height: 72%;
}

.name {
  position: relative;
  display: block;
  margin-bottom: 0;
}
</style>
