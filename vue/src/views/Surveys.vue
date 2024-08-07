<template>
  <PageComponent title="Monitor Survey"></PageComponent>


  <main class="min-h-screen bg-repeat" style="background-image: url(/img/bg-dashboard.png);">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="container mx-auto flex flex-wrap justify-center lg:justify-evenly xl:justify-between gap-5">
        <div class="rounded-md shadow-lg outline outline-2 outline-gray-300 w-full md:w-330 px-5 py-4 bg-white">
          <h1 class="text-2xl text-center mb-2 font-medium">Survey</h1>
          <p class="my-3 text-base text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            voluptatibus ab facilis velit voluptates rem, suscipit sequi ipsum.
          </p>
          <p class="text-center text-gray-600 mb-3 text-sm">
            Created Survey at: 05-08-2024
          </p>
          <div class="flex justify-center">
            <button
              class="p-3 px-6 bg-secondary text-white rounded-md text-sm hover:bg-transparent hover:text-primary hover:outline hover:outline-primary transition hover:duration-200">
              Check Survey
            </button>
          </div>
          <Menu as="div" class="relative inline-block text-left w-full">
            <div class="flex justify-end">
              <MenuButton
                class="inline-flex w-12 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 right-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Edit
                    Jawaban</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Edit
                    Survey</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Hapus
                    Survey</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="relative rounded-md shadow-lg outline outline-2 outline-gray-300 w-full md:w-330 px-5 py-4">
          <h1 class="text-2xl text-center mb-2 font-medium">Survey</h1>
          <p class="my-3 text-base text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            voluptatibus ab facilis velit voluptates rem, suscipit sequi ipsum.
          </p>
          <p class="text-center text-gray-600 mb-3 text-sm">
            Created Survey at: 05-08-2024
          </p>
          <div class="flex justify-center">
            <button
              class="p-3 px-6 bg-secondary text-white rounded-md text-sm hover:bg-transparent hover:text-primary hover:outline hover:outline-primary transition hover:duration-200">
              Check Survey
            </button>
          </div>
          <Menu as="div" class="relative inline-block text-left w-full">
            <div class="flex justify-end">
              <MenuButton
                class="inline-flex w-12 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 right-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Edit
                    Jawaban</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Edit
                    Survey</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Hapus
                    Survey</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>

        <div class="rounded-md shadow-lg outline outline-2 outline-gray-300 w-full md:w-330 px-5 py-4">
          <h1 class="text-2xl text-center mb-2 font-medium">Survey</h1>
          <p class="my-3 text-base text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            voluptatibus ab facilis velit voluptates rem, suscipit sequi ipsum.
          </p>
          <p class="text-center text-gray-600 mb-3 text-sm">
            Created Survey at: 05-08-2024
          </p>
          <div class="flex justify-center">
            <button
              class="p-3 px-6 bg-secondary text-white rounded-md text-sm hover:bg-transparent hover:text-primary hover:outline hover:outline-primary transition hover:duration-200">
              Check Survey
            </button>
          </div>
          <Menu as="div" class="relative inline-block text-left w-full">
            <div class="flex justify-end">
              <MenuButton
                class="inline-flex w-12 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6 right-0">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Edit
                    Jawaban</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Edit
                    Survey</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Hapus
                    Survey</a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import PageComponent from "../components/PageComponent.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
</script>

<styles>
</styles>
