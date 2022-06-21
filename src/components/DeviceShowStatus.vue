<template>
  <!-- QR Code -->
  <!-- QR move to all page show components -->
  <!-- Water Status Good case -->
  <!-- <button @click="change">테스트</button> -->
  <div v-if="waterStatus" class="status-box">
    <!-- Showing Char Status -->
    <div class="status-char-img">
      <img src="status_good_char.png" alt="status-good-char" />
    </div>
    <!-- Status Bar -->
    <div class="status-bar status-good">
      <img src="status_good_text.png" />
    </div>
  </div>
  <div v-else class="status-box">
    <!-- Showing Char Status -->
    <div class="status-char-img">
      <img src="status_bad_char.png" alt="status-bad-char" />
    </div>
    <!-- Status Bar -->
    <div class="status-bar status-bad">
      <img src="status_bad_text.png" />
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  // components: { ShowDetail },

  data: function () {
    return {
      waterStatus: true,
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
      this.waterStatus = data;
      console.log(data);
    });
  },
  methods: {
    // for debug
    change: function () {
      this.waterStatus = !this.waterStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.status-box {
  margin-top: 70px;
  position: absolute;
  // margin-left: auto;
  // margin-right: auto;
  left: 5%;
}
.status-char-img {
  // margin-top: 150px;
  text-align: center;
  // position: relative;
}
.status-char-img img {
  width: 340px;
  outline: none;
}

.status-bar {
  height: 160px;
  width: 430px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  text-align: center;
}
.status-bar img {
  width: 370px;
  margin: 5%;
}

.status-good {
  // background-color: #b4dfed;
  // color: #00a1d8;
}

.status-bad {
  // background-color: #efd298;
  // color: #e17401;
}
</style>
