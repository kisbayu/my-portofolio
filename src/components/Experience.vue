<template>
    <v-container id="experience" class="mb-5">
        <div class="title d-flex justify-center">Experience</div>
        <div class="subtitle d-flex justify-center">My Working Experience</div>
        <div class="timeline-container">
            <v-timeline align="start">
            <v-timeline-item
                v-for="(year, i) in years"
                :key="i"
                :dot-color="year.color"
                size="small"
            >
                <template v-slot:opposite>
                <div
                    :class="`pt-1 font-weight-mediun text-grey-lighten-1`"
                    v-text="year.status"
                ></div>
                </template>
                <div>
                <h2 :class="`mt-n1 headline font-weight-bold mb-1 text-deep-purple-lighten-1`">
                    {{ year.title }}
                </h2>
                <div :class="`mt-n1 font-weight-medium mb-1 text-grey-darken-1`">
                    {{ year.company }}
                </div>
                <div :class="`mt-n1 font-weight-medium mb-1 text-grey-darken-1`">
                    {{ year.year }}
                </div>
                <div :class="`pt-1 font-weight-mediun text-grey-lighten-1`" >
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
          color: 'deep-purple-lighten-1',
          status: 'Part Time',
          title: 'Web Developer',
          company: 'Directory of Information Technology UGM',
          year: '2023 - Now',
          text: 'Implementating and slicing web design using WordPress. Creating and maintaining web applications using CodeIgniter.',
        },
        {
          color: 'deep-purple-lighten-1',
          status: 'Freelance',
          title: 'Web Developer',
          company: 'Ministry of Industry Republic of Indonesia',
          year: '2023',
          text: 'Creating a small medium enterprise (SME) website using php, laravel, postgres, and blade tamplate engine.',
        },
        {
          color: 'deep-purple-lighten-1',
          status: 'Freelance',
          title: 'Product Designer',
          company: 'MyFlorist.id',
          year: '2023 - Now',
          text: 'Creating the brand and grand design of MyFlorist.id. Developing the product design and user experience.',
        },
        {
          color: 'deep-purple-lighten-1',
          status: 'Internship',
          title: 'Associate Product Designer Intern',
          company: 'PT. TaniHub Indonesia',
          year: '2022',
          text: 'Creating an user friendly design using Figma. Maintaing product design and user experience of TaniHub',
        }
      ],
    }),
  }
</script>