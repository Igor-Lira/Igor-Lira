<template>
  <div class="description-container">
    <div class="title-1">
      <slot name="title" />
    </div>
    <div class="title-2"> DESCRIPTION </div>
    <div class="description-description">
      <slot name="description" />
    </div>
    <div class="title-2"> ABOUT </div>
    <div class="description-description">
      <slot name="about" />
    </div>
    <div class="video">
      <slot name="video" />
    </div>
  </div>
</template>
  
<style scoped>
.description-container {
  margin-left: 10%;
  width: 80%;
}

.description-description {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #444444;
}

.title-1 {
  margin-top: 20px;
  text-align: center;
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #000000;
}

.title-2 {
  font-family: 'Itim';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #b3b3b3;
}

.video {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>