<template>

  <main class="min-h-screen bg-repeat" style="background-image: url(/img/bg-dashboard.png);">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <div class="container mx-auto flex flex-wrap justify-center gap-5 mt-24">

        <!-- Form Table -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full md:w-3/4 lg:w-1/2">

          <form action="#" method="post">
            <table class="text-sm text-left rtl:text-right text-gray-500 table-fixed w-full">
              <thead class="text-xs text-white uppercase bg-primary">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    <!-- Create User -->
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap text-2xl text-center">
                    Create User
                  </th>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-between items-center">
                    <label for="name">Nama Lengkap :</label>
                    <input required type="text" name="name" id="name" placeholder="Masukkan nama"
                      class="rounded-md text-sm focus:border-4 focus:border-primary placeholder:font-normal w-1/2">
                  </th>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-between items-center">
                    <label for="email">Email :</label>
                    <input required type="email" name="email" id="email" placeholder="Masukkan alamat email"
                      class="rounded-md text-sm focus:border-4 focus:border-primary placeholder:font-normal w-1/2">
                  </th>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-between items-center">
                    <label for="password">Password :</label>
                    <input required type="password" name="password" id="password" placeholder="Masukkan password"
                      class="rounded-md text-sm focus:border-4 focus:border-primary placeholder:font-normal w-1/2">
                  </th>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-between items-center">
                    <label for="role_id">Role :</label>
                    <select name="role_id" id="role_id" class="text-sm w-1/2 rounded-md">
                      <option value="" disabled selected>Pilih Role</option>
                      <option value="1">Admin</option>
                      <option value="2">PIC WDU</option>
                      <option value="3">Koordinator Lapangan</option>
                      <option value="4">Enum</option>
                      <option value="5">Klien</option>
                    </select>
                  </th>
                </tr>
                <tr class="bg-white border-b">
                  <th scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-end items-center">
                    <input type="submit" value="Submit"
                      class="cursor-pointer px-6 py-3 bg-ijo-terang text-white rounded-md hover:bg-primary">
                  </th>
                </tr>
              </tbody>
            </table>
          </form>

        </div>


      </div>
    </div>
  </main>
</template>

<script setup>
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/vue";
// import { ChevronDownIcon } from "@heroicons/vue/20/solid";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
// import PageComponent from "../components/PageComponent.vue";
// import { useStore } from "vuex";
// import { useRouter } from "vue-router";
// import { computed } from "vue";
</script>

<styles>
</styles>
