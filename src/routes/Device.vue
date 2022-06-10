<!-- 물 상태 출력 페이지 -->
<template>
  <!-- <div class="tab-content">
    <a-carousel autoplay> 
    <a-carousel :after-change="onChange">
      <div>
        <ShowStatus />
      </div>
      <div>
        <ShowCampaign />
      </div>
      <div>
        <ShowTabwater />
      </div>
    </a-carousel>
  </div> -->
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
  <!-- <div class="tab-content">
    <a-tabs v-model:activeKey="activeKey" centered>
      <a-tab-pane key="1" tab="1">
        <ShowStatus />
      </a-tab-pane>
      <a-tab-pane key="2" tab="2" force-render>
        <ShowCampaign />
      </a-tab-pane>
      <a-tab-pane key="3" tab="3" force-render>
        <ShowTabwater />
      </a-tab-pane>
    </a-tabs>
  </div> -->
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
    }, 12000);
  },
};
</script>

<style scoped>
/* .tab-content {
  width: 480px;
  height: 800px;
} */

/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 800px;
  width: 480px;
  /* line-height: 160px; */
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
