<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <h1>Rover Cycle</h1>
    <h3>Configure your rover's data collection cycle</h3>
  </div>
  <div class="wrapper">
    <div class="section">
      <h2>Route</h2>
      <p>
        In the future, this is where the user will set up the rover's data
        collection route
      </p>
    </div>
    <div class="section" s>
      <h2>Additional Settings</h2>
      <p>
        In the future, this is where the user will control additional settings
      </p>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/base.css";

h1 {
  font-weight: 700;
}

input {
  margin-left: 16px;
  margin-right: 8px;
}

.section {
  margin-top: 16px;
}

.wrapper {
  margin-top: 60px;
}

.row {
  display: flex;
  flex-direction: row;
}

.info-type {
  margin-right: 8px;
  font-weight: 600;
}
</style>
