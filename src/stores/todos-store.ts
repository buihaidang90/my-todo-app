import { defineStore } from "pinia"
export const useTodosStore = defineStore("todos", {
    state: () => ({
        todos: [
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
            {
                id: 5,
                content:
                    "➜  Vue DevTools: Press Alt(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools.",
                completed: true,
            },
        ],
    }),
    getters: {
    },
    actions: {
        addNewTodo(newTodo) {
            var autoID = 1;
            if (this.todos.length) autoID = this.todos[this.todos.length - 1].id + 1;
            while (this.todos.filter((todo) => todo.id === autoID).length) {
                autoID++;
            }
            newTodo.id = autoID
            //   console.log("push element into array...");
            this.setJustEdit(newTodo, true);
            this.todos.push(newTodo);
            this.setJustEdit(newTodo, false);
        },
        editTodo(newTodo) {
            this.todos.forEach((todo) => {
                if (todo.id === newTodo.id) {
                    this.setJustEdit(todo, true);
                    todo.content = newTodo.content;
                    this.setJustEdit(todo, false);
                }
            });
        },
        deleteTodo(todoItem) {
            var ind = -1;
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id !== todoItem.id) continue;
                ind = i;
                break;
            }
            // console.log(id, ind);
            if (ind > -1) this.todos.splice(ind, 1);
        },
        changeState(todoItem) {
            this.todos.forEach((todo) => {
                if (todo.id === todoItem.id) {
                    todo.completed = !todo.completed;
                    this.setDisableEdit(todo, todo.completed);
                }
            });
        },
        setJustEdit(target, value) {
            try {
                if (value) {
                    Object.assign(target, { isJustEdit: `${value}` });
                    // console.log(target);
                    return;
                }
                setTimeout(() => {
                    this.todos.forEach((todo) => {
                        if (todo.id === target.id) delete todo.isJustEdit;
                    });
                }, 1000);
                // console.log(target);
            } catch (error) {
                console.log(error);
            }
        },
        setDisableEdit(target, value) {
            try {
                if (value) {
                    Object.assign(target, { disableEdit: `${value}` });
                    // console.log(target);
                    return;
                }
                this.todos.forEach((todo) => {
                    if (todo.id === target.id) delete todo.disableEdit;
                });
                // console.log(target);
            } catch (error) {
                console.log(error);
            }
        },
    }
})