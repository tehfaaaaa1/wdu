<template>
  <PageComponent title="Dashboard"></PageComponent>
  
  <main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex relative h-80 justify-evenly">
        <div class="content-center">
          <h1 class="font-semibold text-center sm:text-left text-3xl">Welcome back, Admin!</h1>
          <p class="mt-2 text-gray-500">Check recent reports here!</p>
        </div>
        <img src="/img/Group 63.png" alt="" class="hidden md:block md:w-330">
      </div>

      <!-- <h2 class="mt-10 font-medium text-2xl">Surveys</h2> -->
    </div>
  </main>
</template>

<script setup>
import store from '../store';
import PageComponent from '../components/PageComponent.vue';
</script>

<styles>
</styles>