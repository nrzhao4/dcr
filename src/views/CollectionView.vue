<script>
import CollectionDisplay from "@/components/collections/CollectionDisplay.vue";
import axios from "axios";

export default {
  components: { CollectionDisplay },
  data() {
    return {
      collectionData: [],
      graphData: [],
      date: 0,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:4000/collections/${this.$route.params.id}`)
      .then((res) => {
        this.collectionData = res.data;
        this.graphData = this.formatData();
        // get collection date by looking at first timestamp available
        this.date = res.data[0].data[0].time;
      });
  },
  methods: {
    getTimestamp(timestamp) {
      const dateObject = new Date(timestamp * 1000);
      return dateObject.toLocaleTimeString();
    },
    formatData() {
      let formatted = [];
      this.collectionData.map((item) => {
        let times = [];
        let values = [];
        item.data.map((d) => {
          times.push(this.getTimestamp(d.time));
          values.push(d.value);
        });
        const sensorData = {
          name: item.sensor,
          times,
          values,
        };
        formatted.push(sensorData);
      });
      return formatted;
    },
  },
  computed: {
    collectionDateString() {
      const d = new Date(this.date * 1000);
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const dateString =
        month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
      return dateString;
    },
  },
};
</script>

<template>
  <div>
    <h1>Soil moisture data on {{ collectionDateString }}</h1>
    <CollectionDisplay
      v-for="graph in graphData"
      :key="graph.name"
      :chart-name="graph.name"
      :times="graph.times"
      :values="graph.values"
    />
  </div>
</template>
