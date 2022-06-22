<template>
  <a-layout>
    <h2>수동조작용</h2>
    <button @click="change">색변경</button>
    <button @click="changeAdd">리터추가</button>
  </a-layout>
</template>

<script>
import { getDatabase, ref, onValue, update } from "firebase/database";

export default {
  data: function () {
    return {
      status: null,
      waterUsage: {},
    };
  },
  created() {
    // for debug
    // console.log(this.$firebase);
    const db = getDatabase(this.$firebase);
    // Use statusRef2 for Gala
    const statusRef = ref(db, "water_status");
    onValue(statusRef, (snapshot) => {
      const data = snapshot.val();
      this.data = data;
      this.waterUsage = data.usage;
    });
    const statusRef2 = ref(db, "ph_status");
    onValue(statusRef2, (snapshot) => {
      const data = snapshot.val();
      this.status = data;
      console.log(data);
    });
  },

  methods: {
    change: function () {
      const db = getDatabase(this.$firebase);
      const updates = {};
      updates["/ph_status"] = !this.status;
      console.log(this.status);
      update(ref(db), updates);
    },
    // Water Add
    changeAdd: function () {
      const db = getDatabase(this.$firebase);
      const updates = {};
      this.data.usage++;
      updates["/water_status"] = this.data;

      // console.log(this.data);
      update(ref(db), updates);
    },
  },
};
</script>

<style></style>
