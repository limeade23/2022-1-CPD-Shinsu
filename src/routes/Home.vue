<template>
  <a-tabs v-model:activeKey="activeKey" centered>
    <a-tab-pane key="1" tab="수질 정보">
      <WaterStatusInfo />
    </a-tab-pane>
    <a-tab-pane key="2" tab="캠페인" force-render>
      <Campaign />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import WaterStatusInfo from "../components/WaterStatusInfo.vue";
import Campaign from "../components/Campaign.vue";
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
