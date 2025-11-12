<script setup>
import NavModal from "@/components/NavModal.vue";
import { useDark, useToggle } from "@vueuse/core";
import gsap from "gsap";
import { onMounted, ref } from "vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const showMenu = ref(false);

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
onMounted(() => {
  gsap.from(".navLink", {
    y: "-100px",
    opacity: 0,
    stagger: 0.4,
    duration: .5,
  });
  gsap.from("#homeAavatar", {
    delay: .5,
    opacity: 0,
    duration: .5
  });
});
</script>

<template>
  <header class="pointer-events-none relative z-50 flex flex-none flex-col">
    <template v-if="$route.path === '/'">
      <div class="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"></div>
      <div class="sm:px-8 top-0 order-last -mb-3 pt-3" id="homeAavatar">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="top-(--avatar-top,--spacing(3)) w-full">
                <div class="relative">
                  <div
                    class="absolute top-3 left-0 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
                    style="
                      opacity: var(--avatar-border-opacity, 0);
                      transform: var(--avatar-border-transform);
                    "
                  ></div>
                  <RouterLink
                    class="block h-16 w-16 origin-left pointer-events-auto"
                    to="/"
                  >
                    <img
                      src="/avatar.jpeg"
                      alt=""
                      width="512"
                      height="512"
                      class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
                    />
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div class="top-0 z-10 h-16 pt-6">
      <div class="sm:px-8 top-(--header-top,--spacing(6)) w-full">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div class="relative flex gap-4">
                <div class="flex flex-1 navLink">
                  <div
                    id="smallAvatar"
                    :class="$route.path === '/' ? 'hidden' : ''"
                    class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
                  >
                    <RouterLink class="pointer-events-auto" to="/">
                      <img
                        src="/avatar.jpeg"
                        alt=""
                        width="512"
                        height="512"
                        class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                      />
                    </RouterLink>
                  </div>
                </div>
                <div class="flex flex-1 justify-end md:justify-center navLink">
                  <div class="pointer-events-auto md:hidden">
                    <button
                      @click="toggleMenu()"
                      class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                      type="button"
                    >
                      Menu<svg
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
                    <NavModal
                      v-if="showMenu == true"
                      :toggleMenu="toggleMenu"
                    />
                  </div>
                  <nav class="pointer-events-auto hidden md:block">
                    <ul
                      class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                    >
                      <li>
                        <router-link
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          active-class="text-teal-500 dark:text-teal-400 after:absolute after:inset-x-1 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-teal-500/0 after:via-teal-500/40 after:to-teal-500/0 dark:after:from-teal-400/0 dark:after:via-teal-400/40 dark:after:to-teal-400/0"
                          to="/"
                          >Home</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/about"
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          active-class="text-teal-500 dark:text-teal-400 after:absolute after:inset-x-1 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-teal-500/0 after:via-teal-500/40 after:to-teal-500/0 dark:after:from-teal-400/0 dark:after:via-teal-400/40 dark:after:to-teal-400/0"
                        >
                          About
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          active-class="text-teal-500 dark:text-teal-400 after:absolute after:inset-x-1 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-teal-500/0 after:via-teal-500/40 after:to-teal-500/0 dark:after:from-teal-400/0 dark:after:via-teal-400/40 dark:after:to-teal-400/0"
                          to="/projects"
                          >Projects</router-link
                        >
                      </li>
                      <li>
                        <a
                          class="relative block px-4 py-3 transition hover:text-teal-500 dark:hover:text-teal-400"
                          href="https://wa.me/923190117384"
                          target="_blank"
                          rel="noopener"
                          >Contact</a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="flex justify-end md:flex-1 navLink">
                  <div class="pointer-events-auto">
                    <button
                      type="button"
                      @click="toggleDark()"
                      class="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                      >
                        <path
                          d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
                        ></path>
                        <path
                          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                          fill="none"
                        ></path>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition not-[@media_(prefers-color-scheme:dark)]:fill-teal-400/10 not-[@media_(prefers-color-scheme:dark)]:stroke-teal-500 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400"
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
    </div>
  </header>
  <div id="headerSpacer"></div>
</template>

<style>
header {
  position: static;
  transition: all 0.3s ease-in-out;
}

header.nav-up {
  position: fixed;
  width: 100%;
}

header.nav-up #homeAavatar {
  display: none;
}

header.nav-up #smallAvatar {
  display: block;
}

header.nav-down {
  position: static;
  width: auto;
  transition: all 0.3s ease-in-out;
}

#headerSpacer {
  display: none;
  /* default */
}

header.nav-up + #headerSpacer {
  display: block;
  height: 80px;
  /* match your header height */
}

@media (min-width: 768px) {
  header.nav-up + #headerSpacer {
    display: block;
    height: 200px;
    /* match your header height */
  }
}
</style>
