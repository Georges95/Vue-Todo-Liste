<script setup>
import FormButton from '../components/FormButton.vue';
import { useTasksStore } from '../stores/tasks';

import { ref } from 'vue';

const tasksStore = useTasksStore();

const id = ref('')
const name = ref('')
const description = ref('')
const completed = ref('')

const handleSubmit = () => {
  tasksStore.tasks.push({
    id: tasksStore.tasks.length + 1,
    name: name.value,
    description: description.value,
    completed: false,
  })

  name.value = '';
  description.value = '';
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Nom</label>
              <input
                v-model="name"
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Nom du projet"
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea
                v-model="description"
                name="description"
                class="form-control"
                id="description"
                rows="3"
                placeholder="Description du projet"
              ></textarea>
            </div>

           <FormButton buttonText="Envoyer"/>
          
        </form>

</template>

<style>

</style>