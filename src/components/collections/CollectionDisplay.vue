<script>
import axios from "axios";

export default {
  props: {
    collectionId: String,
  },
  data() {
    return {
      collectionData: {},
    };
  },
  mounted() {
    axios
      .get(`http://localhost:4000/collections/${this.collectionId}`)
      .then((res) => (this.collectionData = res.data));
  },
};
</script>

<template>
  <div>
    <p>{{ collectionData }}</p>
  </div>
</template>
