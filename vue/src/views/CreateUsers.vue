<template>

  <main class="min-h-screen bg-repeat" style="background-image: url(/img/bg-dashboard.png);">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <div class="container mx-auto flex flex-wrap justify-center gap-5 mt-24">

        <!-- Form Table -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2">
          <table class="text-sm text-left rtl:text-right text-gray-500 table-fixed w-full">
            <thead class="text-xs text-white uppercase bg-primary">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Create User
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Apple MacBook Pro 17"
                </th>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Microsoft Surface Pro
                </th>
              </tr>
              <tr class="bg-white hover:bg-gray-50">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Magic Mouse 2
                </th>
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
