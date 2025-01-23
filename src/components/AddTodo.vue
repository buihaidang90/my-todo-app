<template>
  <div class="add-todo">
    <input
      type="text"
      class="text-todo"
      placeholder="Enter your todo work..."
      v-model="content"
      @keyup.enter="addItem"
    />
    <button class="btn-add" @click="addItem">Add Todo</button>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

const content = ref("");
const emit = defineEmits(["addItem"])
const addItem = () => {
  if (content.value.trim() === "") return;
//   console.log("add new todo...");
  const newItem = {
    content: content.value,
    completed: false,
  };
  emit("addItem", newItem);
  content.value = "";
};
</script>
  
<style scoped>
.add-todo {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 2px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #e6e2e2a1;
  border-bottom: 1px dotted #887d92;
}
.text-todo {
  border: none;
  border-radius: 4px;
  padding: 6px;
  width: auto;
}
.btn-add {
  width: 80px;
  padding: 7px;
  border: 0;
  border-radius: 4px;
  background-color: #0c79df;
  color: #fff;
  cursor: pointer;
}
</style>