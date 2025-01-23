<template>
  <AddTodo @addItem="addNewTodo" />
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoItem="todo"
    @changeStatus="changeState"
    @editItem="editTodo"
    @deleteItem="deleteTodo"
  />
</template>

<script setup>
import { ref } from "vue";
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

const todos = ref([
  {
    id: 1,
    content:
      "Event Handling: Integrated Vue.js event handling for tasks such as adding, editing, and deleting.",
    completed: false,
  },
  {
    id: 2,
    content:
      "Dynamic Rendering: Used Vue.js directives like v-for for dynamic rendering of tasks and v-bind for conditional styling.",
    completed: false,
  },
  {
    id: 3,
    content:
      "State Management: Managed application state using Vue.js data properties for efficient data handling.",
    completed: false,
  },
  {
    id: 4,
    content:
      "Table Layout: Implemented a table-like layout using CSS Grid for the task list.",
    completed: false,
  },
]);

const changeState = (id) => {
  todos.value.forEach((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
      setDisableEdit(todo, todo.completed);
    }
  });
};
const editTodo = (newItem) => {
  todos.value.forEach((todo) => {
    if (todo.id === newItem.id) {
      setJustEdit(todo, true);
      todo.content = newItem.content;
      setJustEdit(todo, false);
    }
  });
};
const deleteTodo = (id) => {
  var ind = -1;
  for (let i = 0; i < todos.value.length; i++) {
    if (todos.value[i].id !== id) continue;
    ind = i;
    break;
  }
  // console.log(id, ind);
  if (ind > -1) todos.value.splice(ind, 1);
};

const addNewTodo = (newItem) => {
  var id = 1;
  if (todos.value.length) id = todos.value[todos.value.length - 1].id + 1;
  while (todos.value.filter((todo) => todo.id === id).length) {
    id++;
  }
  var newTodo = {
    id: id,
    content: newItem.content,
    completed: newItem.completed,
    isJustEdit: true,
  };
  //   console.log("push element into array...");
  todos.value.push(newTodo);
  setJustEdit(newTodo, false);
};

const setJustEdit = (target, value) => {
  try {
    if (value) {
      Object.assign(target, { isJustEdit: `${value}` });
      // console.log(target);
      return;
    }
    setTimeout(() => {
      todos.value.forEach((todo) => {
        if (todo.id === target.id) delete todo.isJustEdit;
      });
    }, 1000);
    // console.log(target);
  } catch (error) {
    console.log(error);
  }
};
const setDisableEdit = (target, value) => {
  try {
    if (value) {
      Object.assign(target, { disableEdit: `${value}` });
      // console.log(target);
      return;
    }
    todos.value.forEach((todo) => {
      if (todo.id === target.id) delete todo.disableEdit;
    });
    // console.log(target);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
</style>