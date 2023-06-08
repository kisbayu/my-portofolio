<template>
  <v-app-bar app color="#ffffff" dark flat class="px-8">
    <v-btn color="deep-purple-lighten-1" text @click="scroll('home')">Kisbayu</v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('experience')">Experience</v-btn>
    <v-btn text @click="scroll('skills')">Skills</v-btn>
    <!-- <v-btn text @click="scroll('projects')">Projects</v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
    
</style>