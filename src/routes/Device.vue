<template>
  <div>
    <!-- QR Code -->
    <div class="qrcode">
      <img src="https://via.placeholder.com/80" alt="qr-code" />
    </div>
    <!-- <img src="status_good_char.png" alt="status-good-char" /> -->
    <ShowStatus />
  </div>
</template>

<script>
import ShowStatus from "~/components/ShowStatus";

export default {
  components: {
    ShowStatus,
  },
  // computed: {
  //   ShowStatus,
  //   heropyMessage() {
  //     return this.$store.state.heropy.message;
  //   },
  // },
};
</script>

<style>
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
