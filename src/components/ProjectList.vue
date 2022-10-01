<script setup>
</script>
<template>
  <div class="project-list-container">
    <div class="project-card">
      <img src="../../public/marvel.jpg" />
      <div class="project-category"> FRONT-END WEB </div>
      <div class="project-title"> MARVEL WORLD </div>
    </div>
    <div class="project-card">
      <img src="../../public/marvel.jpg" />
      <div class="project-category"> FRONT-END WEB </div>
      <div class="project-title"> MARVEL WORLD </div>
    </div>
    <div class="project-card">
      <img src="../../public/marvel.jpg" />
      <div class="project-category"> FRONT-END WEB </div>
      <div class="project-title"> MARVEL WORLD </div>
    </div>
  </div>
</template>

<style>
.project-list-container {
  margin-top: 20px;
  margin-left: 10%;
  width: 100%;
  /* height: 350px; */
  display: flex;
  flex-wrap: wrap;
}

.project-card {
  min-width: 300px;
  margin-right: 30px;
  margin-top: 30px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-shadow: 3px 4px 4px rgba(192, 188, 188, 0.25);
  border-radius: 31px 31px 10px 10px;
}

.project-card>img {
  height: 270px;
  width: 100%;
  border-radius: 31px 31px 0px 0px;
}

.project-category {
  margin-left: 14px;
  margin-top: 11px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
}

.project-title {
  margin-left: 14px;
  margin-top: 11px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
}
</style>