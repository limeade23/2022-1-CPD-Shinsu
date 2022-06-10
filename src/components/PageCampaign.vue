<template>
  <CampaignList />
  <WaterCampaign />
</template>

<script>
import WaterCampaign from "~/components/WaterCampaign";
import CampaignList from "~/components/CampaignList";

export default {
  components: {
    WaterCampaign,
    CampaignList,
  },
};
</script>

<style>
.bg-img {
  position: fixed;
  bottom: -60px;
  height: 300px;
}
</style>
