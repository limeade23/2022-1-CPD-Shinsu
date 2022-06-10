<template>
  <h2>캠페인</h2>
  <div class="wsd"></div>
  <WaterCampaign />
</template>

<script>
import WaterCampaign from "~/components/WaterCampaign";

export default {
  components: {
    WaterCampaign,
  },
};
</script>

<style lang="scss" scoped>
.wsd {
  margin-bottom: 100px;
}
</style>
