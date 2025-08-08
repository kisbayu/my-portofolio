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
            <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Roboto&weight=700&size=18&duration=4000&pause=600&color=9272CB&width=435&lines=Software+Engineer;Web+Developer;UX+Researcher;Product+Designer;Asset+Manager" alt="Typing SVG" /></a>
            <div class="main-text mb-5">
              A lifelong learner, a highly disciplined person, and a creative person. Have a keen interest in software development, web developer, user experience, and applied psychology.
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
      imagePath: require('@/assets/Group.svg')
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
