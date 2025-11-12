<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import NavModal from "@/components/NavModal.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <header class="pointer-events-none relative z-50 flex flex-col">
    <!-- Home Avatar -->
    <div v-if="$route.path === '/'" class="sm:px-8 top-0 -mb-3 pt-3" id="homeAavatar">
      <div class="mx-auto w-full max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="w-full relative">
              <div
                class="absolute top-3 left-0 h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
                style="opacity: var(--avatar-border-opacity, 0); transform: var(--avatar-border-transform);"
              ></div>
              <RouterLink to="/" class="block h-16 w-16">
                <img
                  src="/avatar.jpeg"
                  alt="avatar"
                  class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Nav -->
    <div class="top-0 z-10 h-16 pt-6">
      <div class="sm:px-8 w-full">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="relative flex gap-4 items-center">
                <!-- Small Avatar -->
                <div class="flex-1 navLink">
                  <div
                    id="smallAvatar"
                    :class="{ hidden: $route.path === '/' }"
                    class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
                  >
                    <RouterLink to="/" class="pointer-events-auto">
                      <img
                        src="/avatar.jpeg"
                        alt="avatar"
                        class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                      />
                    </RouterLink>
                  </div>
                </div>

                <!-- Menu Button & Desktop Nav -->
                <div class="flex-1 flex justify-end md:justify-center navLink">
                  <!-- Mobile Menu -->
                  <div class="pointer-events-auto md:hidden">
                    <button
                      @click="toggleMenu"
                      class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                    >
                      Menu
                      <svg
                        viewBox="0 0 8 6"
                        aria-hidden="true"
                        class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                      >
                        <path
                          d="M1.75 1.75 4 4.25l2.25-2.5"
                          fill="none"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <NavModal v-if="showMenu" :toggleMenu="toggleMenu" />
                  </div>

                  <!-- Desktop Nav -->
                  <nav class="pointer-events-auto hidden md:block">
                    <ul
                      class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                    >
                      <li>
                        <router-link
                          to="/"
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          active-class="text-teal-500 dark:text-teal-400"
                        >
                          Home
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="/about"
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          active-class="text-teal-500 dark:text-teal-400"
                        >
                          About
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="/projects"
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          active-class="text-teal-500 dark:text-teal-400"
                        >
                          Projects
                        </router-link>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/923190117384"
                          target="_blank"
                          rel="noopener"
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <!-- Dark Mode Button -->
                <div class="flex-1 flex justify-end navLink">
                  <button
                    type="button"
                    @click="toggleDark"
                    class="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden"
                    >
                      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                      <path
                        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                        fill="none"
                      ></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 dark:block"
                    >
                      <path
                        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div id="headerSpacer"></div>
</template>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
}

header.nav-up {
  transform: translateY(-100%);
}

header.nav-down {
  transform: translateY(0);
}

#homeAavatar {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

#smallAvatar {
  display: none;
}

header.nav-up #homeAavatar {
  opacity: 0;
  pointer-events: none;
}

header.nav-up #smallAvatar {
  display: block;
}

#headerSpacer {
  height: 80px; /* same as header height */
}

/* Larger screens adjustments */
@media (min-width: 768px) {
  #headerSpacer {
    height: 100px;
  }
}
</style>