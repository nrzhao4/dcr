<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/collections")
      .then((res) => (this.info = res.data));
  },
};
</script>

<template>
  <div>
    <p>{{ info }}</p>
  </div>
</template>
