<template>
  <!-- QR Code -->
  <div class="qrcode">
    <img src="https://via.placeholder.com/80" alt="qr-code" />
  </div>
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
    const starCountRef = ref(db, "water_status");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.waterStatus = data.ph_status;
      console.log(data.ph_status);
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
.qrcode {
  float: left;
  position: absolute;
  margin-top: 30px;
  margin-left: 30px;
}

.qrcode img {
  width: 80px;
}
</style>
