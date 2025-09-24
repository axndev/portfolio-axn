<script setup>

defineProps({
    toggleMenu: Function
})

</script>

<template>
    <div class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
        id="headlessui-popover-backdrop-_R_5dkmlb_" aria-hidden="true" data-headlessui-state="open" data-open=""
        style="">
    </div>
    <div class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
        id="headlessui-popover-panel-_R_7dkmlb_" tabindex="-1" data-headlessui-state="open" data-open=""
        style="--button-width: 88.71875px;">
        <div class="flex flex-row-reverse items-center justify-between">
            <button aria-label="Close menu" class="-m-1 p-1" @click="toggleMenu()" type="button"
                data-headlessui-state="open active" data-open="" data-active=""><svg viewBox="0 0 24 24"
                    aria-hidden="true" class="h-6 w-6 text-zinc-500 dark:text-zinc-400">
                    <path d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5" fill="none" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></button>
            <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
        </div>
        <nav class="mt-6">
            <ul
                class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <li><router-link @click="toggleMenu()" class="block py-2" data-headlessui-state="open active"
                        data-open="" data-active="" to="/">Home</router-link></li>
                <li><router-link @click="toggleMenu()" class="block py-2" data-headlessui-state="open active"
                        data-open="" data-active="" to="/about">About</router-link></li>
                <li><router-link @click="toggleMenu()" class="block py-2" data-headlessui-state="open active"
                        data-open="" data-active="" to="/projects">Projects</router-link></li>
                <li><a @click="toggleMenu()" class="block py-2" data-headlessui-state="open active" data-open=""
                        data-active="" href="https://wa.me/923190117384" target="_blank" rel="noopener">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>