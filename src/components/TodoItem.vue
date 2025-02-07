<template>
  <div
    class="todo-item"
    :class="[hasAttrJustEdit ? 'todo-item-editing' : '']"
    :id="props.todoItem.id"
  >
    <input type="checkbox" class="chk-completed" @change="toggleStatus" />
    <p
      class="todo-title"
      :class="[props.todoItem.completed ? 'is-completed' : '']"
    >
      {{ props.todoItem.content }}
    </p>
    <div class="action-btn">
      <button
        class="btn-edit"
        :class="[getDisableEdit() ? 'btn-disabled' : '']"
        @click="editItem"
      >
        Edit
      </button>
      <button class="btn-delete" @click="deleteItem">Delete</button>
    </div>
  </div>
</template>
  
<script setup>
import { computed, onBeforeMount, onMounted, ref } from "vue";

const props = defineProps({
  todoItem: Object,
});
const emit = defineEmits(["changeStatus", "editItem", "deleteItem"]);

onBeforeMount(() => {
  //   console.log(props.todoItem);
});
onMounted(() => {
  //   console.log(props.todoItem);
  //   if (Object.keys(props.todoItem).includes("isJustEdit"))
  //     console.log(props.todoItem);
});

const toggleStatus = (e) => {
  //   console.log(
  //     "You just have been change completed status: " + e.target.checked
  //   );
  //   console.log(e);
  emit("changeStatus", props.todoItem);
};
const editItem = () => {
  //   console.log("Edit item button clicked.");
  const newContent = prompt("Edit the todo:");
  if (newContent == null) return;
  if (newContent.trim() == "") return;

  const newItem = {
    id: props.todoItem.id,
    content: newContent.trim(),
  };
  emit("editItem", newItem);
};
const deleteItem = () => {
  //   console.log("Delete item button clicked.");
  emit("deleteItem", props.todoItem);
};

const hasAttrJustEdit = computed(() => {
  if (!Object.keys(props.todoItem).includes("isJustEdit")) return false;
  try {
    return props.todoItem.isJustEdit;
  } catch (error) {
    console.log(error);
  }
  return false;
});
const isDisableEdit = computed(() => {
  if (!Object.keys(props.todoItem).includes("disableEdit")) return false;
  try {
    // console.log("disableEdit=" + props.todoItem.disableEdit);
    return props.todoItem.disableEdit;
  } catch (error) {
    console.log(error);
  }
  return false;
});
const getDisableEdit = () => {
  if (!Object.keys(props.todoItem).includes("disableEdit")) return false;
  try {
    // console.log("disableEdit=" + props.todoItem.disableEdit);
    return props.todoItem.disableEdit;
  } catch (error) {
    console.log(error);
  }
  return false;
};
</script>
  
<style scoped>
.todo-item {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  grid-column-gap: 2px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: #e6e2e2a1;
  border-bottom: 1px dotted #887d92;
}
.todo-item-editing {
  background-color: beige;
}
.chk-completed {
  width: 20px;
  height: 20px;
  accent-color: #006efff1;
}
.is-completed {
  text-decoration: line-through;
}
.todo-title {
  color: #192de4;
  margin: 0;
}
.todo-msg {
  font-size: 12px;
  text-indent: 20px;
  color: #887d92;
  margin: 0;
}
.action-btn {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2px;
}
.btn-edit,
.btn-delete {
  width: 80px;
  padding: 7px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.btn-edit {
  background-color: #0c79df;
}
.btn-edit:hover {
  background-color: #0c79dfb7;
}
.btn-delete {
  background-color: #cc0303;
}
.btn-delete:hover {
  background-color: #cc0303b2;
}
.hide {
  display: none;
}
.btn-disabled {
  pointer-events: none; /*disable hover events*/
  cursor: not-allowed;
  background-color: #887d9273;
  color: #000;
}
</style>