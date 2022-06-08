<!-- 물 상태 출력 페이지 -->
<template>
  <div class="tab-content">
    <div v-show="currentTab == 0">
      <ShowStatus />
    </div>
    <div v-show="currentTab == 1">
      <ShowCampaign />
    </div>
    <div v-show="currentTab == 2">
      <ShowTabwater />
    </div>
  </div>
</template>

<script>
import ShowStatus from "~/components/DeviceShowStatus";
import ShowCampaign from "~/components/DeviceShowCampaign";
import ShowTabwater from "~/components/DeviceShowTabwater";

export default {
  components: {
    ShowStatus,
    ShowCampaign,
    ShowTabwater,
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  mounted() {
    // 페이지 반복 설정
    setInterval(() => {
      if (this.currentTab == 2) {
        this.currentTab = -1;
      }
      this.currentTab++;
      // for Debug
      // console.log(this.currentTab);
    }, 4000);
  },
};
</script>

<style></style>
