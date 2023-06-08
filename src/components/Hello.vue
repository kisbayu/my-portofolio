<template >
    <v-container id="home" class="d-flex align-center mb-5 mt-5">
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="1"></v-col>
        <v-col cols="12" sm="5">
          <v-sheet class="ma-2 pa-5 d-flex justify-end">
            <v-img
              :width="10"
              aspect-ratio="1/1"
              cover
              :src="imagePath" contain
            ></v-img>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="5">
          <v-sheet class="my-5 pa-5 align-center">
            <div class="title">Howdy, I'm Bayu</div>
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Roboto&weight=700&size=18&duration=4000&pause=600&color=9272CB&width=435&lines=Software+Engineer;Web+Developer;UX+Researcher;Product+Designer" alt="Typing SVG" /></a>
            <div class="main-text mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit deserunt velit harum. Unde beatae similique officiis doloremque.
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      imagePath: require('@/assets/Photo.svg')
    };
  }
};
</script>


<style scoped>
  .v-btn {
    background-color: #7E57C2;
    color: #ffffff;
  }
</style>
