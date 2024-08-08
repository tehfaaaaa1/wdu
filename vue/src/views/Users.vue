<template>
  <PageComponent title="User List"></PageComponent>


  <main class="min-h-screen bg-repeat" style="background-image: url(/img/bg-dashboard.png);">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div class="flex justify-between mb-6">
        <div class="">
          <button
            class="bg-primary text-white font-medium px-6 py-2 rounded-md border-2 hover:bg-white hover:text-primary hover:border-primary transition">Add
            User
          </button>
        </div>

        <Menu as="div" class="relative inline-block text-left">
          <div class="flex justify-center">
            <MenuButton
              class="w-48 text-primary bg-white border-b-2 border-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center"
              type="button">
              <p>Filter</p>
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </MenuButton>
          </div>

          <!-- Dropdown menu -->
          <MenuItems class="z-10 w-48 absolute bg-white rounded-lg shadow">
            <ul class="p-3 space-y-1 text-sm text-gray-700">
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100">
                  <input id="checkbox-item-4" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                  <label for="checkbox-item-4"
                    class="w-full ms-2 text-sm font-medium text-gray-500 rounded">Klien</label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100">
                  <input checked id="checkbox-item-5" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                  <label for="checkbox-item-5"
                    class="w-full ms-2 text-sm font-medium text-gray-500 rounded">Enum</label>
                </div>
              </li>
              <li>
                <div class="flex items-center p-2 rounded hover:bg-gray-100">
                  <input id="checkbox-item-6" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                  <label for="checkbox-item-6" class="w-full ms-2 text-sm font-medium text-gray-500 rounded">Koordinator
                    Lapang</label>
                </div>
              </li>
            </ul>
          </MenuItems>

        </Menu>
      </div>


      <div class="container mx-auto flex flex-wrap justify-center lg:justify-evenly xl:justify-between gap-5">

        <!-- Table list -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed">
            <thead class="text-xs text-white uppercase bg-primary">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Password
                </th>
                <th scope="col" class="px-6 py-3 w-1/6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline mr-4">Edit</a>
                  <a href="#" class="font-medium text-red-600 hover:underline">Delete</a>
                </td>
              </tr>
              <tr
                class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                  White
                </td>
                <td class="px-6 py-4">
                  Laptop PC
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline mr-4">Edit</a>
                  <a href="#" class="font-medium text-red-600 hover:underline">Delete</a>
                </td>
              </tr>
              <tr class="bg-white hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                  Black
                </td>
                <td class="px-6 py-4">
                  Accessories
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 hover:underline mr-4">Edit</a>
                  <a href="#" class="font-medium text-red-600 hover:underline">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
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
