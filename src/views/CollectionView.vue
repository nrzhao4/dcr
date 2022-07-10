<script>
import CollectionDisplay from "@/components/collections/CollectionDisplay.vue";

export default {
  components: { CollectionDisplay },
};
</script>

<template>
  <div>
    <h1>You are viewing data from your collection</h1>
    <CollectionDisplay :collection-id="this.$route.params.id" />
  </div>
</template>
