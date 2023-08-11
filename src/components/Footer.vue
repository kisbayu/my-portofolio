<template>
    <v-footer
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div>
        <v-btn
        icon="mdi-linkedin"
        class="mx-4"
        variant="text"
        @click="redirectToLinkedIn">
        </v-btn>
        <v-btn
        icon="mdi-github"
        class="mx-4"
        variant="text"
        @click="redirectToGithub">
        </v-btn>
      </div>
  
      <div class="pt-0">
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} 
        <br/> © Kisbayu Adji
      </div>
    </v-footer>
  </template>

<script>
export default {

  methods: {
    redirectToLinkedIn() {
      window.open("https://www.linkedin.com/in/kisbayuadji/", "_blank");
    },
    redirectToGithub() {
      window.open("https://github.com/kisbayu", "_blank");
    }
  },

  data: () => ({
    icons: [
      'mdi-linkedin',
      'mdi-github',
    ],
  }),
}
</script>