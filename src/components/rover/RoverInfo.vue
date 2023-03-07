<script>
export default {
  emits: ["roverStart"],
  props: {
    name: String,
    date: String,
    status: String,
  },
};
</script>

<template>
  <div>
    <h1>Your Rover</h1>
  </div>
  <div class="wrapper">
    <div class="info">
      <p class="info-type">Name:</p>
      <p>{{ this.name }}</p>
    </div>
    <div class="info">
      <p class="info-type">Collecting data since:</p>
      <p>{{ this.date }}</p>
    </div>
    <div class="wrapper">
      <div class="info">
        <button @click="$emit('roverStart')">Start Data Collection</button>
        <p class="statusContainer">{{ this.status }}</p>
      </div>
    </div>
    <div class="wrapper">
      <router-link :to="{ name: 'roverConfig' }" v-slot="{ navigate }">
        <button @click="navigate">Settings</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/base.css";

h1 {
  font-weight: 700;
  margin-bottom: 48px;
}
.statusContainer {
  margin-left: 8px;
}
.wrapper {
  margin-top: 12px;
}

.info {
  display: flex;
  flex-direction: row;
}

.info-type {
  margin-right: 8px;
  font-weight: 600;
}
</style>
