<!-- 물 상태 출력 페이지 -->
<template>
  <div>
    <!-- 캠페인 출력 -->
    <ShowCampaign />
  </div>
</template>

<script>
import ShowCampaign from "~/components/DeviceShowCampaign";

export default {
  components: {
    ShowCampaign,
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/device");
    }, 5000);
  },
};
</script>

<style></style>
