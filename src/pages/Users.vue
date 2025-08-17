<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">
            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Пользователи</h1>
            </div>
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <FilterButton align="right" />
              <button class="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                <svg class="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="max-xs:sr-only">Добавить пользователя</span>
              </button>
            </div>
          </div>

          <!-- Users table -->
          <div class="bg-white dark:bg-gray-800 shadow-xs rounded-xl">
            <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
              <h2 class="font-semibold text-gray-800 dark:text-gray-100">Все пользователи</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full dark:text-gray-300">
                  <thead class="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs">
                    <tr>
                      <th class="p-2">
                        <div class="font-semibold text-left">Пользователь</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Email</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Роль</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Статус</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Дата регистрации</div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-center">Действия</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
                    <tr v-for="user in users" :key="user.id">
                      <td class="p-2">
                        <div class="flex items-center">
                          <div class="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img class="rounded-full" :src="user.avatar" width="40" height="40" :alt="user.name" />
                          </div>
                          <div class="font-medium text-gray-800 dark:text-gray-100">{{ user.name }}</div>
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-left">{{ user.email }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-center">
                          <span class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium" :class="getRoleClass(user.role)">
                            {{ user.role }}
                          </span>
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-center">
                          <span class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium" :class="getStatusClass(user.status)">
                            {{ user.status }}
                          </span>
                        </div>
                      </td>
                      <td class="p-2">
                        <div class="text-center">{{ user.createdAt }}</div>
                      </td>
                      <td class="p-2">
                        <div class="text-center">
                          <EditMenu align="right" class="relative inline-flex">
                            <li>
                              <a class="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" href="#0">Редактировать</a>
                            </li>
                            <li>
                              <a class="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" href="#0">Заблокировать</a>
                            </li>
                            <li>
                              <a class="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" href="#0">Удалить</a>
                            </li>
                          </EditMenu>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Banner />

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../partials/Sidebar.vue'
import Header from '../partials/Header.vue'
import FilterButton from '../components/DropdownFilter.vue'
import EditMenu from '../components/DropdownEditMenu.vue'
import Banner from '../partials/Banner.vue'

import Image01 from '../images/user-36-05.jpg'
import Image02 from '../images/user-36-06.jpg'
import Image03 from '../images/user-36-07.jpg'
import Image04 from '../images/user-36-08.jpg'
import Image05 from '../images/user-36-09.jpg'

export default {
  name: 'Users',
  components: {
    Sidebar,
    Header,
    FilterButton,
    EditMenu,
    Banner,
  },
  setup() {
    const sidebarOpen = ref(false)
    
    const users = ref([
      {
        id: 1,
        name: 'Алексей Шатов',
        email: 'alexshatov@gmail.com',
        avatar: Image01,
        role: 'Администратор',
        status: 'Активен',
        createdAt: '15.01.2024'
      },
      {
        id: 2,
        name: 'Филипп Харбах',
        email: 'philip.h@gmail.com',
        avatar: Image02,
        role: 'Модератор',
        status: 'Активен',
        createdAt: '12.01.2024'
      },
      {
        id: 3,
        name: 'Мирко Фисук',
        email: 'mirkofisuk@gmail.com',
        avatar: Image03,
        role: 'Пользователь',
        status: 'Заблокирован',
        createdAt: '08.01.2024'
      },
      {
        id: 4,
        name: 'Ольга Семкло',
        email: 'olga.s@cool.design',
        avatar: Image04,
        role: 'Пользователь',
        status: 'Активен',
        createdAt: '05.01.2024'
      },
      {
        id: 5,
        name: 'Бурак Лонг',
        email: 'longburak@gmail.com',
        avatar: Image05,
        role: 'Пользователь',
        status: 'Неактивен',
        createdAt: '02.01.2024'
      }
    ])

    const getRoleClass = (role) => {
      switch (role) {
        case 'Администратор':
          return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
        case 'Модератор':
          return 'bg-violet-100 text-violet-800 dark:bg-violet-900/20 dark:text-violet-400'
        default:
          return 'bg-gray-100 text-gray-800 dark:bg-gray-700/60 dark:text-gray-300'
      }
    }

    const getStatusClass = (status) => {
      switch (status) {
        case 'Активен':
          return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
        case 'Заблокирован':
          return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
        default:
          return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      }
    }

    return {
      sidebarOpen,
      users,
      getRoleClass,
      getStatusClass,
    }  
  }
}
</script>