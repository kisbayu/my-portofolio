<template >
    <v-container id="home">
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <v-sheet class="ma-2 pa-5 d-flex justify-end">
            Photo of Me
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="5">
          <v-sheet class="ma-2 pa-5">
            <div class="title">Howdy, I'm Bayu</div>
            <div class="subtitle">I'm a Web Developer</div>
            <div class="main-text mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit deserunt velit harum. Unde beatae similique officiis doloremque.
            </div>
            <v-btn variant="tonal">
                Contact Me
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<style scoped>
  .v-container{
    align-items: center;
    display: flex;
    height: 90vh;
  }
  .v-btn {
    background-color: #7E57C2;
    color: #ffffff;
  }
</style>
