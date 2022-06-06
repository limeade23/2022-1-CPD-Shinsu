<template>
  <div class="campaign-list">
    <h1>EARTH-U Campaign</h1>
    <p>수돗물 음용을 통한 제로웨이스트 실천 & 기부 캠페인</p>
    <div class="campaign-type">
      <p>오프라인</p>
    </div>
    <p>2022-06-00~</p>
  </div>
  <div class="campaign-info">
    <div class="bubble">
      <h1>21%</h1>
      <img src="status_bubble.png" alt="bubble" />
      <p>아직 부족해요!</p>
    </div>
    <div class="campaign-desc">
      <img id="char" src="char.png" alt="" />
      <div class="campaign-text">
        <p>Earth-U 를 마시면</p>
        <p>물이 필요한 곳에 기부가 됩니다.</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.campaign-list {
  padding: 5px;
  padding-left: 20px;
  height: 90px;
  box-shadow: 0px 5px 5px 0px gray;
}
.campaign-info {
  /* background-image: url("../../water_line.png"); */
}

.bubble {
  text-align: center;
}
.bubble img {
  margin-top: 70px;
  width: 280px;
  /* float: left;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: auto; */
}

.campaign-type {
  background-color: black;
  color: white;
  /* float: left; */
  /* position: absolute; */
  text-align: center;
  width: 90px;
  height: 25px;
  /* margin-right: 20px; */
}

.bubble h1 {
  /* float: left; */
  position: absolute;
  margin-left: 180px;
  margin-top: 160px;
  font-size: 60px;
}

.bubble p {
  margin-top: 30px;
  font-size: 25px;
  color: #5d7480;
}

.campaign-desc {
  height: 300px;
}

#char {
  /* float: left; */
  margin-left: 30px;
  height: 250px;
  position: absolute;
}

#bg-img {
  position: fixed;
  bottom: -60px;
  height: 300px;
}

.campaign-text {
  float: right;
  text-align: center;
  margin-top: 100px;
  margin-right: 30px;
  font-size: 23px;
}
</style>
