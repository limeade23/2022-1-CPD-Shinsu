<template>
  <a-layout>
    <div class="t">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="수질 정보">
          <WaterStatusInfo />
        </a-tab-pane>
        <a-tab-pane key="2" tab="캠페인" force-render>
          <Campaign />
        </a-tab-pane>
      </a-tabs>
    </div>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <i class="fa-solid fa-droplet"></i> ©2022 Shinsu
    </a-layout-footer>
  </a-layout>
</template>
<script>
import WaterStatusInfo from "../components/PageWaterStatusInfo.vue";
import Campaign from "../components/PageCampaign.vue";
import { defineComponent, ref } from "vue";

export default {
  components: {
    WaterStatusInfo,
    Campaign,
  },
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
  data() {
    return {};
  },
};
</script>

<style>
.t {
  background-color: white;
  padding-top: 10px;
}

.ant-tabs-nav {
  box-shadow: 1px 1px 5px 1px gray;
}

.ant-tabs-content-holder {
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
