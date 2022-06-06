<template>
  <div
    v-for="val in waterStatus"
    :key="val.name"
    class="content content-shadow"
  >
    <div class="content-name content-shadow">
      <p>{{ val.name }}</p>
    </div>
    <div class="content-value content-shadow">
      <p>{{ val.value }}</p>
    </div>
    <!-- <a href="#" class="content-more">더보기 ></a> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      waterStatus: [
        {
          name: "설치위치",
          value: "한강공원",
        },
        {
          name: "수온",
          value: "17.3",
        },
        {
          name: "pH",
          value: "7.3",
        },
        {
          name: "TDU",
          value: "17.3",
        },
        {
          name: "탁도",
          value: "5.3",
        },
        {
          name: "마신량",
          value: "10L",
        },
      ],
    };
  },
};
</script>

<style>
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
  box-shadow: inset 0px 1px 2px 0px gray;
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
</style>
