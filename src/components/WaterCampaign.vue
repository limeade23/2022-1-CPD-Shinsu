<template>
  <div class="campaign-info">
    <div class="bubble">
      <div class="bubble-percent">
        <p>{{ waterUsage }}</p>
      </div>
      <img src="water_bubble.png" alt="bubble image" />
    </div>
    <div class="campaign-status-ment">
      <p>{{ ment }}</p>
    </div>
    <div class="campaign-desc">
      <img class="char" src="char.png" alt="" />
      <div class="campaign-text">
        <p>Earth-U 를 마시면 <br />물이 필요한 곳에 기부가 됩니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  // components: { ShowDetail },

  data: function () {
    return {
      waterUsage: "0" + "%",
      ment: "아직 부족해요!",
    };
  },
  created() {
    // for debug
    // console.log(this.$firebase);
    const db = getDatabase(this.$firebase);
    const starCountRef = ref(db, "water_status");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.changeStatus(data);
    });
  },

  methods: {
    changeStatus: function (data) {
      const usage = Math.ceil(data.usage);

      this.waterUsage = Math.ceil(usage) + "%";

      if (usage > 90) {
        this.ment = "거의 다 왔어요!";
      } else if (usage > 50) {
        this.ment = "절반 왔어요!";
      } else {
        this.ment = "아직 부족해요!";
      }
    },
  },
};
</script>

<style scope>
.bubble {
  /* position: relative; */
  text-align: center;
  position: relative;
}

.bubble-percent {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-weight: 300;
  margin-bottom: 0;
  color: #21334a;
}

.bubble-percent p {
  margin-bottom: 0;
}

.campaign-status-ment {
  text-align: center;
  margin-top: 15px;
  font-size: 23px;
  font-weight: 350;
  color: #5d7480;
}

.bubble img {
  vertical-align: middle;
  width: 250px;
}

.campaign-type {
  background-color: black;
  color: white;
  text-align: center;
  width: 90px;
  height: 25px;
}

.campaign-desc {
  /* height: 300px; */
}

.char {
  /* float: left; */
  /* margin-left: 10px; */
  height: 200px;
  position: absolute;
}

.campaign-text {
  float: right;
  text-align: center;
  margin-top: 120px;
  margin-right: 10px;
  font-size: 20px;
}
</style>
