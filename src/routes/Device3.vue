<!-- 물 상태 출력 페이지 -->
<template>
  <!-- 수돗물이에요 알려주는 페이지 -->
  <div>
    <ShowStatus />
  </div>
</template>

<script>
import ShowStatus from "~/components/DeviceShowCampaign";

export default {
  components: {
    ShowStatus,
  },
};
</script>

<style></style>
