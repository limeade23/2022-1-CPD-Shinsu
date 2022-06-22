<template>
  <a-layout>
    <h2>수동조작용</h2>
    <a-switch v-model:checked="checked" />
  </a-layout>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },
});
</script>

<style></style>
