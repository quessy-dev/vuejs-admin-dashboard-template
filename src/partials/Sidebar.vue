<template>
  <!-- Sidebar backdrop (mobile only) -->
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
    :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    aria-hidden="true"
  ></div>

  <!-- Sidebar -->
  <div
    id="sidebar"
    ref="sidebar"
    class="flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
  >

    <!-- Sidebar header -->
    <div class="flex justify-between mb-10 pr-3 sm:px-2">
      <!-- Close button -->
      <button
        ref="trigger"
        class="lg:hidden text-gray-500 hover:text-gray-400"
        @click.stop="$emit('close-sidebar')"
        aria-controls="sidebar"
        :aria-expanded="sidebarOpen"
      >
        <span class="sr-only">Закрыть боковую панель</span>
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
      </button>
      <!-- Logo -->
      <router-link class="block" to="/">
        <svg class="fill-current text-violet-500" width="32" height="32" viewBox="0 0 32 32">
          <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Z" />
          <path d="M17.2 0C25.08.584 31.372 6.876 31.956 14.756H26.24A9.04 9.04 0 0 1 17.2 5.716V0Z" />
          <path d="M0 17.2C.584 25.08 6.876 31.372 14.756 31.956V26.24A9.04 9.04 0 0 1 5.716 17.2H0Z" />
        </svg>
      </router-link>
    </div>

    <!-- Links -->
    <div class="space-y-8">
      <!-- Pages group -->
      <div>
        <h3 class="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
          <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
          <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Страницы</span>
        </h3>
        <ul class="mt-3">
          <!-- Dashboard -->
          <SidebarLinkGroup :activeCondition="$route.path === '/'">
            <template #default="{ handleClick, expanded }">
              <router-link
                class="block text-gray-800 dark:text-gray-100 truncate transition"
                :class="$route.path === '/' ? '' : 'hover:text-gray-900 dark:hover:text-white'"
                to="/"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 fill-current" :class="$route.path === '/' ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.424.034-.84.1-1.243a7.9 7.9 0 0 1 2.705-5.27L5.936.278Zm-.132 1.65L2.92 4.86c-.314 1.084-.427 2.24-.427 3.14A6.001 6.001 0 0 0 8 14c.773 0 1.513-.145 2.193-.410L5.804 1.927Z" />
                    </svg>
                    <span class="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Главная панель
                    </span>
                  </div>
                </div>
              </router-link>
            </template>
          </SidebarLinkGroup>
          <!-- Analytics -->
          <SidebarLinkGroup :activeCondition="$route.path === '/analytics'">
            <template #default="{ handleClick, expanded }">
              <router-link
                class="block text-gray-800 dark:text-gray-100 truncate transition"
                :class="$route.path === '/analytics' ? '' : 'hover:text-gray-900 dark:hover:text-white'"
                to="/analytics"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 fill-current" :class="$route.path === '/analytics' ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm2 0v12h12V2H2Z" />
                      <path d="M4 4h2v8H4V4ZM8 6h2v6H8V6ZM12 8h2v4h-2V8Z" />
                    </svg>
                    <span class="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Аналитика
                    </span>
                  </div>
                </div>
              </router-link>
            </template>
          </SidebarLinkGroup>
          <!-- Users -->
          <SidebarLinkGroup :activeCondition="$route.path === '/users'">
            <template #default="{ handleClick, expanded }">
              <router-link
                class="block text-gray-800 dark:text-gray-100 truncate transition"
                :class="$route.path === '/users' ? '' : 'hover:text-gray-900 dark:hover:text-white'"
                to="/users"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 fill-current" :class="$route.path === '/users' ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <span class="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Пользователи
                    </span>
                  </div>
                </div>
              </router-link>
            </template>
          </SidebarLinkGroup>
          <!-- Settings -->
          <SidebarLinkGroup :activeCondition="$route.path === '/settings'">
            <template #default="{ handleClick, expanded }">
              <router-link
                class="block text-gray-800 dark:text-gray-100 truncate transition"
                :class="$route.path === '/settings' ? '' : 'hover:text-gray-900 dark:hover:text-white'"
                to="/settings"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 fill-current" :class="$route.path === '/settings' ? 'text-violet-500' : 'text-gray-400 dark:text-gray-500'" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <span class="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Настройки
                    </span>
                  </div>
                </div>
              </router-link>
            </template>
          </SidebarLinkGroup>
        </ul>
      </div>
    </div>

    <!-- Expand / collapse button -->
    <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
      <div class="w-12 pl-4 pr-3 py-2">
        <button class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400" @click="sidebarExpanded = !sidebarExpanded">
          <span class="sr-only">Развернуть / свернуть боковую панель</span>
          <svg class="shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180" width="16" height="16" viewBox="0 0 16 16">
            <path d="M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7Z" />
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
  },
  setup(props, { emit }) {
    const trigger = ref(null)
    const sidebar = ref(null)
    const sidebarExpanded = ref(localStorage.getItem('sidebar-expanded') === 'true')

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (!props.sidebarOpen || sidebar.value.contains(target) || trigger.value.contains(target)) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
      
      // Set initial sidebar state
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    // Handle sidebar expand/collapse
    const toggleSidebar = () => {
      sidebarExpanded.value = !sidebarExpanded.value
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value.toString())
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    }

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      toggleSidebar,
    }
  }
}
</script>