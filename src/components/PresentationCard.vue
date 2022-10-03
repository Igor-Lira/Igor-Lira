<script setup>
function openCV() {
  window.open('https://docs.google.com/viewer?url=https://igor-lira.github.io/Igor-Lira/CV_EN.pdf');

}
function openLinkedIn() {
  window.open('https://www.linkedin.com/in/igor-lira-passos-5b4aa5192/')
}
function openGithub() {
  window.open('https://github.com/Igor-Lira')
}
</script>
  
<template>
  <div class="presentation-card">
    <div class="presentation-content">
      <div class="presentation-content-1">Hello, I'm</div>
      <div class="presentation-content-2">Igor</div>
      <div class="presentation-content-1">a Web Developer</div>
      <div class="buttons-container">
        <button @click="openCV"> Resume </button>
        <button @click="openGithub"> <img src="../../public/icon-github.svg" alt=""></button>
        <button @click="openLinkedIn"> <img src="../../public/icon-linkedin.svg" alt=""> </button>
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
  left: 5%;
  height: 320px;
  width: 90%;
  background: red;
  background: #FDFDFD;
  box-shadow: 3px 4px 4px rgba(163, 159, 159, 0.25)
}

.presentation-content {
  margin-left: 10%;
  position: absolute;
  top: 30%;
  text-align: left;
  /* width: 355px; */
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
  /* padding-top: 10px; */
  display: flex;
}

.buttons-container>button {
  margin-right: 10px;
  width: fit-content;
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  height: 30px;
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

button>img {
  /* padding-top: 2px; */
  width: 20px;
  background-size: cover;
}
</style>