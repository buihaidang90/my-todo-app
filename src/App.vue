<template>
  <Header title="My Todo App (Vue Composition)" />
  <Todos />
</template>

<script setup>
import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue";
</script>

<style>
body {
  font-size: 14px;
  padding: 0 10px;
}
</style>