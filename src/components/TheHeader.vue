<template>
  <a-tabs v-model:activeKey="activeKey" centered>
    <a-tab-pane key="1" tab="수질 정보"> Content of Tab Pane 1 </a-tab-pane>
    <a-tab-pane key="2" tab="캠페인" force-render>
      Content of Tab Pane 2
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
  data() {
    return {};
  },
});
</script>
