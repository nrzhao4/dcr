<script>
import axios from "axios";
import RoverInfo from "@/components/rover/RoverInfo.vue";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  data() {
    return {
      sendRoverStartStatus: "",
    };
  },
  methods: {
    handleRoverStart() {
      const url = `${BASE_URL}/rover/cycle-times`;
      const TWO_DAYS_IN_MS = 48 * 60 * 60 * 1000; // hard code as 48 hours for now
      const NO_DELAY = 0; // also hard code as 0 for now
      const data = {
        interval: TWO_DAYS_IN_MS,
        delay: NO_DELAY,
      };
      axios
        .post(url, data)
        .then((res) => {
          if (res.status === 200) {
            console.log("successfully posted start command");
            console.log(res.data);
            this.sendRoverStartStatus = "Start command send";
          } else {
            console.log("error");
            this.sendRoverStartStatus = "Error sending start command";
          }
        })
        .catch((err) => {
          console.log("error");
          this.sendRoverStartStatus = "Error sending start command";
        });
    },
  },
};
</script>

<template>
  <main>
    <RoverInfo
      name="Penelope"
      date="5 March 2023"
      :status="sendRoverStartStatus"
      @rover-start="handleRoverStart"
    />
  </main>
</template>
