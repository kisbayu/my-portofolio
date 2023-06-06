<template>
    <v-container id="experience">
        <div class="title d-flex justify-center">Experience</div>
        <div class="subtitle d-flex justify-center">My Work Experience</div>
        <div class="timeline-container">
            <v-timeline align="start">
            <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :dot-color="year.color"
                size="small"
            >
                <!-- <template v-slot:opposite>
                <div
                    :class="`pt-1 headline font-weight-bold text-${year.color}`"
                    v-text="year.year"
                ></div>
                </template> -->
                <div>
                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                    {{ year.title }}
                </h2>
                <div>
                    {{ year.text }}
                </div>
                </div>
            </v-timeline-item>
            </v-timeline>
        </div>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '2023',
          title: 'Lorem 123',
          text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.',
        },
        {
          color: 'pink',
          year: '2021',
          title: 'Lorem ipsum',
          text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.',
        }
      ],
    }),
  }
</script>