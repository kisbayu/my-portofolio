<script setup>
// Components
import NavBar from '@/components/NavBar.vue'
import Hello from '@/components/Hello.vue'
import Experience from '@/components/Experience.vue'
import Skills from '@/components/Skills.vue'
import MyProjects from '@/components/MyProjects.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <NavBar />
    <Hello />
    <Experience />
    <Skills />
    <MyProjects />
    <Footer />
</template>

<style>
    .title {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        color: #24222A;
    }
    .subtitle {
        font-size: 1rem;
        font-weight: 600;
        color: #7e7b81;
    }
    .main-text{
        font-size: 1rem;
        font-weight: 300;
        color: #B1B0B8;
    }
</style>
