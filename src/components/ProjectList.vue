<script setup>
import { useTasksStore } from '../stores/tasks';

const tasksStore = useTasksStore();


</script>

<template>
    <div class="card"
     v-for="task in tasksStore.tasks" :key="task.id>
        
            <div class="card-body">
              
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" />
              </div>

              <h4>Titre du projet</h4>
              <p>Description du projet</p>
              <span class="edit"><i class="bi bi-trash text-danger"></i></span>
            </div>
    </div>

</template>

<style>

</style>