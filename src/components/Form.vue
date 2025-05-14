<script setup>
import FormButton from './components/FormButton.vue'

</script>

<template>
    <form>
            <div class="mb-3">
              <label for="name" class="form-label">Nom</label>
              <input
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