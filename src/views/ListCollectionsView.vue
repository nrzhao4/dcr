<script>
import CollectionListItem from "@/components/collections/CollectionListItem.vue";
import axios from "axios";
export default {
  data() {
    return {
      collections: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/collections")
      .then((res) => (this.collections = res.data));
  },
};
</script>

<template>
  <main>
    <div>
      <h1>View Your Soil Moisture Data</h1>
      <h3 v-if="!collections">Looks like you have no soil data yet</h3>
      <CollectionListItem :collections="collections" />
    </div>
  </main>
</template>
