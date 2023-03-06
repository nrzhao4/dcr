<script>
import CollectionListItem from "@/components/collections/CollectionListItem.vue";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  data() {
    return {
      collections: [],
    };
  },
  mounted() {
    const url = `${BASE_URL}/collections`;
    console.log("node env: ", import.meta.env.MODE);
    console.log(url);
    axios.get(url).then((res) => (this.collections = res.data));
  },
};
</script>

<template>
  <main>
    <div>
      <h1>View Your Soil Moisture Data</h1>
      <h3 v-if="collections.length === 0">
        Looks like you have no soil data yet
      </h3>
      <CollectionListItem :collections="collections" />
    </div>
  </main>
</template>
