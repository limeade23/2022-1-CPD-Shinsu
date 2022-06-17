<template>
  <div
    v-for="val in waterStatusData"
    :key="val.name"
    class="content content-shadow"
  >
    <!-- <p class="more">더보기 ></p> -->
    <div class="content-name content-shadow">
      <p>{{ val.name }}</p>
    </div>
    <div class="content-value content-shadow">
      <p>
        {{ val.value }}
      </p>
    </div>
    <!-- <a href="#" class="content-more">더보기 ></a> -->
  </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  data() {
    return {
      waterStatusData: [
        {
          name: "설치위치",
          value: "위치",
          icon: "fa-solid fa-magnifying-glass",
        },
        {
          name: "수온",
          value: "0",
          icon: "",
        },
        {
          name: "pH",
          value: "0",
        },
        {
          name: "TDS",
          value: "0",
        },
        {
          name: "탁도",
          value: "0",
        },
        {
          name: "마신량",
          value: "0" + "L",
        },
      ],
    };
  },
  created() {
    // for debug
    // console.log(this.$firebase);
    const db = getDatabase(this.$firebase);
    const starCountRef = ref(db, "water_status");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      this.changeStatus(data);
    });
  },
  methods: {
    changeStatus: function (data) {
      this.waterStatusData[0]["value"] = data.location;
      this.waterStatusData[1]["value"] = data.temper + " C°";
      this.waterStatusData[2]["value"] = data.ph.toFixed(2);
      this.waterStatusData[3]["value"] = data.tds.toFixed(2) + " ppm";
      this.waterStatusData[4]["value"] = data.turbidity + " NTU";
      this.waterStatusData[5]["value"] = data.usage + " L";
    },
  },
};
</script>

<style>
.fa-solid {
}
.content-more {
  float: right;
  margin-bottom: 100px;
}
.content-name {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: white;
  float: left;
  text-align: center;
  line-height: 90px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 17px;
  font-weight: 600;
}

.content-value {
  height: 38px;
  width: 180px;
  border-radius: 20px;
  background-color: white;
  float: left;
  text-align: center;
  line-height: 38px;
  margin-top: 35px;
  margin-left: 25px;
  font-size: 16px;
}

.content-shadow {
  box-shadow: inset 0px 1px 2px 0px rgb(112 112 112 / 100%);
}

.content {
  width: 350px;
  height: 130px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  /* box-shadow: inset 0px 1px 2px 0px gray; */
  background-color: #a7e0f1;
}

.content:hover {
  background-color: #59c6e7;
}

.more {
  color: rgb(0 0 0 / 45%);
  /* float: right; */
  position: absolute;
  /* text-align: right; */
  left: 80%;
}
</style>
