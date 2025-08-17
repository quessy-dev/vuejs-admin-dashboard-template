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
              <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Аналитика</h1>
            </div>
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <FilterButton align="right" />
              <Datepicker align="right" />
            </div>
          </div>

          <!-- Analytics cards -->
          <div class="grid grid-cols-12 gap-6">
            
            <!-- Visitors Overview -->
            <div class="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
              <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 class="font-semibold text-gray-800 dark:text-gray-100">Обзор посетителей</h2>
              </header>
              <div class="p-5">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-gray-800 dark:text-gray-100">24,567</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Всего посетителей</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-gray-800 dark:text-gray-100">18,234</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Уникальные посетители</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-gray-800 dark:text-gray-100">6,333</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Возвращающиеся</div>
                  </div>
                </div>
                <div class="h-64 bg-gray-50 dark:bg-gray-700/20 rounded-lg flex items-center justify-center">
                  <span class="text-gray-500 dark:text-gray-400">График посещений</span>
                </div>
              </div>
            </div>

            <!-- Top Pages -->
            <div class="col-span-full xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
              <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 class="font-semibold text-gray-800 dark:text-gray-100">Популярные страницы</h2>
              </header>
              <div class="p-3">
                <div class="space-y-3">
                  <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/20 rounded-lg">
                    <div>
                      <div class="font-medium text-gray-800 dark:text-gray-100">/dashboard</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">Главная панель</div>
                    </div>
                    <div class="text-right">
                      <div class="font-semibold text-gray-800 dark:text-gray-100">8,234</div>
                      <div class="text-sm text-green-600">+12%</div>
                    </div>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/20 rounded-lg">
                    <div>
                      <div class="font-medium text-gray-800 dark:text-gray-100">/analytics</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">Аналитика</div>
                    </div>
                    <div class="text-right">
                      <div class="font-semibold text-gray-800 dark:text-gray-100">5,678</div>
                      <div class="text-sm text-green-600">+8%</div>
                    </div>
                  </div>
                  <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/20 rounded-lg">
                    <div>
                      <div class="font-medium text-gray-800 dark:text-gray-100">/users</div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">Пользователи</div>
                    </div>
                    <div class="text-right">
                      <div class="font-semibold text-gray-800 dark:text-gray-100">3,456</div>
                      <div class="text-sm text-red-600">-3%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Device Stats -->
            <div class="col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
              <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 class="font-semibold text-gray-800 dark:text-gray-100">Устройства</h2>
              </header>
              <div class="p-5">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                      <span class="text-gray-800 dark:text-gray-100">Десктоп</span>
                    </div>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">65%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-sky-500 rounded-full mr-3"></div>
                      <span class="text-gray-800 dark:text-gray-100">Мобильные</span>
                    </div>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">28%</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span class="text-gray-800 dark:text-gray-100">Планшеты</span>
                    </div>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">7%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Conversion Funnel -->
            <div class="col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
              <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 class="font-semibold text-gray-800 dark:text-gray-100">Воронка конверсии</h2>
              </header>
              <div class="p-5">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-800 dark:text-gray-100">Посетители</span>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">10,000</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-800 dark:text-gray-100">Просмотры продукта</span>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">3,500</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-800 dark:text-gray-100">Добавили в корзину</span>
                    <span class="font-semibold text-gray-800 dark:text-gray-100">1,200</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-gray-800 dark:text-gray-100">Покупки</span>
                    <span class="font-semibold text-green-600">450</span>
                  </div>
                </div>
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
import Datepicker from '../components/Datepicker.vue'
import Banner from '../partials/Banner.vue'

export default {
  name: 'Analytics',
  components: {
    Sidebar,
    Header,
    FilterButton,
    Datepicker,
    Banner,
  },
  setup() {
    const sidebarOpen = ref(false)
    return {
      sidebarOpen,
    }  
  }
}
</script>