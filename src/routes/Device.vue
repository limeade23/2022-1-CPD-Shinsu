<!-- 물 상태 출력 페이지 -->
<template>
  <!-- 화면 전체를 버튼으로 -->
  <div class="status-btn" @click="showModal"></div>

  <!-- QR Code -->
  <div class="qrcode">
    <!-- <img src="https://via.placeholder.com/80" alt="qr-code" /> -->
    <img src="qrcode.png" alt="qr-code" />
  </div>

  <div class="tab-content">
    <div v-show="currentTab == 1">
      <ShowStatus />
    </div>
    <div v-show="currentTab == 2">
      <ShowCampaign />
    </div>
    <div v-show="currentTab == 0">
      <ShowTabwater />
    </div>
    <a-modal v-model:visible="statusModal" centered>
      <ShowStatusModal />
    </a-modal>
  </div>
</template>

<script>
import ShowStatus from "~/components/DeviceShowStatus";
import ShowCampaign from "~/components/DeviceShowCampaign";
import ShowTabwater from "~/components/DeviceShowTabwater";
import ShowStatusModal from "~/components/DeviceStatusModal";

import { defineComponent, ref } from "vue";

export default {
  components: {
    ShowStatus,
    ShowCampaign,
    ShowTabwater,
    ShowStatusModal,
  },
  setup() {
    const statusModal = ref(false);

    // 모달창 열기
    const showModal = () => {
      statusModal.value = true;

      // 모달창 자동 닫기
      if (statusModal.value == true) {
        setTimeout(() => {
          statusModal.value = false;
        }, 6000);
      }
    };

    return {
      statusModal,
      showModal,
    };
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
    }, 5000);
  },
};
</script>

<style>
.status-btn {
  width: 100vw;
  height: 100vh;
  position: absolute;
  /* visibility: hidden; */
}

.ant-modal-close-x {
  display: none;
}
.ant-modal-footer {
  display: none;
}
</style>

<style scoped>
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
.qrcode {
  float: left;
  position: absolute;
  margin-top: 30px;
  margin-left: 30px;
}

.qrcode img {
  width: 80px;
}
</style>
