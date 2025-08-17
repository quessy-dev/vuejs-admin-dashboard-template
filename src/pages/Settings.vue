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
          <div class="mb-8">
            <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Настройки</h1>
          </div>

          <div class="grid grid-cols-12 gap-6">
            
            <!-- Settings Navigation -->
            <div class="col-span-full lg:col-span-4 xl:col-span-3">
              <div class="bg-white dark:bg-gray-800 shadow-xs rounded-xl p-5">
                <nav class="space-y-2">
                  <button 
                    v-for="tab in tabs" 
                    :key="tab.id"
                    @click="activeTab = tab.id"
                    class="w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                    :class="activeTab === tab.id 
                      ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400' 
                      : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'"
                  >
                    {{ tab.name }}
                  </button>
                </nav>
              </div>
            </div>

            <!-- Settings Content -->
            <div class="col-span-full lg:col-span-8 xl:col-span-9">
              
              <!-- General Settings -->
              <div v-show="activeTab === 'general'" class="bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                  <h2 class="font-semibold text-gray-800 dark:text-gray-100">Общие настройки</h2>
                </header>
                <div class="p-5 space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Название сайта
                    </label>
                    <input type="text" class="form-input w-full" value="Mosaic Admin" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Описание
                    </label>
                    <textarea class="form-textarea w-full" rows="3">Современная админ-панель для управления вашим проектом</textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Часовой пояс
                    </label>
                    <select class="form-select w-full">
                      <option>UTC+3 (Москва)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC-5 (EST)</option>
                    </select>
                  </div>
                  <div class="flex justify-end">
                    <button class="btn bg-violet-500 hover:bg-violet-600 text-white">
                      Сохранить изменения
                    </button>
                  </div>
                </div>
              </div>

              <!-- Security Settings -->
              <div v-show="activeTab === 'security'" class="bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                  <h2 class="font-semibold text-gray-800 dark:text-gray-100">Безопасность</h2>
                </header>
                <div class="p-5 space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Текущий пароль
                    </label>
                    <input type="password" class="form-input w-full" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Новый пароль
                    </label>
                    <input type="password" class="form-input w-full" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Подтвердите пароль
                    </label>
                    <input type="password" class="form-input w-full" />
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="two-factor" class="form-checkbox" />
                    <label for="two-factor" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Включить двухфакторную аутентификацию
                    </label>
                  </div>
                  <div class="flex justify-end">
                    <button class="btn bg-violet-500 hover:bg-violet-600 text-white">
                      Обновить пароль
                    </button>
                  </div>
                </div>
              </div>

              <!-- Notifications Settings -->
              <div v-show="activeTab === 'notifications'" class="bg-white dark:bg-gray-800 shadow-xs rounded-xl">
                <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                  <h2 class="font-semibold text-gray-800 dark:text-gray-100">Уведомления</h2>
                </header>
                <div class="p-5 space-y-6">
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-800 dark:text-gray-100">Email уведомления</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Получать уведомления на email</div>
                      </div>
                      <div class="form-switch">
                        <input type="checkbox" id="email-notifications" checked />
                        <label for="email-notifications">
                          <span class="bg-white shadow-xs"></span>
                        </label>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-800 dark:text-gray-100">Push уведомления</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Получать push уведомления в браузере</div>
                      </div>
                      <div class="form-switch">
                        <input type="checkbox" id="push-notifications" />
                        <label for="push-notifications">
                          <span class="bg-white shadow-xs"></span>
                        </label>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <div>
                        <div class="font-medium text-gray-800 dark:text-gray-100">SMS уведомления</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Получать SMS на мобильный телефон</div>
                      </div>
                      <div class="form-switch">
                        <input type="checkbox" id="sms-notifications" />
                        <label for="sms-notifications">
                          <span class="bg-white shadow-xs"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <button class="btn bg-violet-500 hover:bg-violet-600 text-white">
                      Сохранить настройки
                    </button>
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
import Banner from '../partials/Banner.vue'

export default {
  name: 'Settings',
  components: {
    Sidebar,
    Header,
    Banner,
  },
  setup() {
    const sidebarOpen = ref(false)
    const activeTab = ref('general')
    
    const tabs = ref([
      { id: 'general', name: 'Общие' },
      { id: 'security', name: 'Безопасность' },
      { id: 'notifications', name: 'Уведомления' },
    ])

    return {
      sidebarOpen,
      activeTab,
      tabs,
    }  
  }
}
</script>