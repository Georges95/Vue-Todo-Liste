import { defineStore } from "pinia";

export const useTasksStore = defineStore('tasks', {
    state() {
        return { 
            tasks: [],
        }
    },

    getters: {
        completedTasks(state) {
            return state.tasks.filter(task => task.completed).length;
        },

        pendingTasks(state) {
            return this.tasks.length - this.completedTasks;
        },

        totalTasks(state) {
            return state.tasks.length;
        },
    }
})