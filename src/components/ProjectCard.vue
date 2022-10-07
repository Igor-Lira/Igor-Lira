<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  title: String,
  date: String,
  category: String,
  imagePath: String,
});
const emits = defineEmits(["navigate"]);
</script>
<template>
  <div class="project-card" @click="emits('navigate')">
    <img :src="props.imagePath" />
    <div class="project-info">
      <div class="project-category">{{ props.category }}</div>
      <div class="project-date">{{ props.date }}</div>
    </div>
    <div class="project-title">{{ props.title }}</div>
  </div>
</template>

<style scoped>
.project-card {
  max-width: 250px;
  margin-right: 30px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-shadow: 3px 4px 4px rgba(192, 188, 188, 0.25);
  border-radius: 8px;
}

.project-card > img {
  height: 200px;
  width: 250px;
  border-radius: 8px 8px 0px 0px;
}

.project-category,
.project-date {
  margin-left: 14px;
  margin-top: 11px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #828282;
}
.project-date {
  margin-right: 12px;
}

.project-title {
  margin-left: 14px;
  margin-top: 11px;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
}

.project-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
