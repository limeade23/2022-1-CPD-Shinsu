<template>
  <div class="campaign-list">
    <div class="campaign-list-content">
      <h1>EARTH-U Campaign</h1>
      <p>수돗물 음용을 통한 제로웨이스트 실천 & 기부 캠페인</p>
      <p class="campaign-type">오프라인</p>
      <p class="campaign-date">2022-06-00 ~</p>
    </div>
  </div>
</template>

<script>
// import WaterCampaign from "~/components/WaterCampaign";

export default {
  // components: {
  //   WaterCampaign,
  // },
};
</script>

<style>
.campaign-list {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.5);
  margin-bottom: 80px;
}

.campaign-list-content {
  padding-left: 20px;
  height: 120px;
}

.campaign-type {
  background-color: black;
  color: white;
  text-align: center;
  width: 90px;
  height: 25px;
  margin-right: 10px;
  float: left;
}

.campaign-date {
  float: left;
}

.campaign-desc {
  height: 300px;
}
</style>
