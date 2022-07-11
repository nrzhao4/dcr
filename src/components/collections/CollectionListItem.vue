<script>
import axios from "axios";
export default {
  props: {
    collections: Object,
  },
  methods: {
    getDate(timestamp) {
      const dateObject = new Date(timestamp * 1000);
      return dateObject.toDateString();
    },
  },
};
</script>

<template>
  <div>
    <router-link
      :to="{ name: 'collection', params: { id: item.collection_id } }"
      v-for="item in collections"
      :key="item.collection_id"
    >
      <p>{{ getDate(item.val_time) }}</p>
    </router-link>
  </div>
</template>
