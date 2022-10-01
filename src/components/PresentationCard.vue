<script setup>
import download_file from '../utils';
</script>
  
<template>
  <div class="presentation-card">
    <div class="presentation-content">
      <div class="presentation-content-1">Hello, I'm</div>
      <div class="presentation-content-2">Igor</div>
      <div class="presentation-content-1">Web Developer</div>
      <div class="buttons-container">
        <button @click="download_file('./CV_EN.pdf')"> Resume </button>
        <button> Github</button>
        <button> LinkedIn </button>
      </div>
    </div>
    <div class="profile-img">
      <img src="../../public/me.jpg" alt="">
    </div>
  </div>
</template>

<style scoped>
.presentation-card {
  position: relative;
  left: 10%;
  height: 300px;
  width: 85%;
  background: red;
  background: #FDFDFD;
  box-shadow: 3px 4px 4px rgba(163, 159, 159, 0.25)
}

.presentation-content {
  position: absolute;
  left: 10%;
  top: 30%;
  text-align: left;
  width: 355px;
  height: 130px;
}

.presentation-content-1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}

.presentation-content-2 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: #000000;
}

.buttons-container {
  margin-top: 20px;
}

.buttons-container>button {
  width: 80px;
  margin-left: 10px;
  background: #3A3737;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

.buttons-container>button:hover {
  background: #767575;
  color: #FFFFFF;
}

@media only screen and (max-width: 720px) {
  .profile-img {
    visibility: hidden;
  }
}

.profile-img {
  position: absolute;
  right: 5%;
  top: 20%;
}

.profile-img>img {
  width: 200px;
  border-radius: 50%;
}
</style>