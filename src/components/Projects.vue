<script setup>
import { ref, defineProps } from 'vue';
import { onMounted, } from 'vue';
import axios from 'axios';
import Project from '@/components/Project.vue';
const projects = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get("/api/projects");
        projects.value = response.data
    } catch (error) {
        console.log(error);
    }
})
console.log(projects.value)
defineProps({
    limit: {
        type: Number,
        default: ''
    },
    showBtn: {
        type: Boolean,
        default: false
    }
})
</script>
<template>
    <div class="my-16 sm:mt-20">
        <ul role="list" class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <Project v-for="project in projects.slice(0, limit || projects.length)" :key="project.id"
                :project="project" />
        </ul>
    </div>
    <router-link v-if="showBtn" to="/projects"
        class="px-6 py-3 lg:m-auto flex items-center text-center w-fit gap-1 hover:gap-3 transition-all duration-100 ease-in-out mt-15 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-500">
        <span>View All Projects</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke="white" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"></path>
            </g>
        </svg>
    </router-link>
</template>