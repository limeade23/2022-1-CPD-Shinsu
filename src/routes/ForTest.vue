<template>
  <a-layout>
    <h2>수동조작용</h2>
    <button @click="change">변꺼어어어엉</button>
  </a-layout>
</template>

<script>
import { getDatabase, ref, onValue, update } from "firebase/database";

export default {
  data: function () {
    return {
      status: null,
    };
  },
  created() {
    // for debug
    // console.log(this.$firebase);
    const db = getDatabase(this.$firebase);
    // Use statusRef2 for Gala
    // const statusRef = ref(db, "water_status");
    // onValue(statusRef, (snapshot) => {
    //   const data = snapshot.val();
    //   this.waterStatus = data.ph_status;
    //   console.log(data.ph_status);
    // });
    const statusRef2 = ref(db, "ph_status");
    onValue(statusRef2, (snapshot) => {
      const data = snapshot.val();
      this.status = data;
      console.log(data);
    });
  },

  methods: {
    // for debug
    change: function () {
      const db = getDatabase(this.$firebase);
      // this.waterStatus = !this.waterStatus;
      // set(ref(this.db, "/ph_status"), {
      //   // this.waterStatus;
      // });
      const updates = {};
      updates["/ph_status"] = !this.status;
      // return update(ref(db), updates);
      console.log(this.status);
      update(ref(db), updates);
    },
  },
};
</script>

<style></style>
