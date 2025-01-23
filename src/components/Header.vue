<template>
  <div class="bhd-header">
    <img alt="Vue logo" class="bhd-logo" src="../assets/logo.svg" />{{
      props.title
    }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true, default: "haidang@mankichi.net" },
});
</script>

<style scoped>
.bhd-header {
  width: 100%;
  height: 100px;
  margin: 0;
  line-height: 100px;
  text-align: center;
  background-color: #365e81;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bhd-logo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
</style>