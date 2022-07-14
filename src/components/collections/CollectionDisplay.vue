<script>
import axios from "axios";
import ApexCharts from "apexcharts";

export default {
  props: {
    chartName: String,
    times: Array,
    values: Array,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: this.chartName,
          animations: {
            enabled: false,
          },
        },
        xaxis: {
          categories: this.times,
        },
      },
      series: [
        {
          name: "series-1",
          data: this.values,
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <h3>Sensor: {{ chartName }}</h3>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
