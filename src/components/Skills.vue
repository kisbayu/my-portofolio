<template>
    <v-container id="skills">
        <div class="title d-flex justify-center mt-5">Skills</div>
        <div class="subtitle d-flex justify-center mb-3">Core Competencies</div>
      <v-row no-gutters>
        <v-col 
            v-for="(skill, i) in skills"
            :key="i"    
            class="pa-5"
            cols="12"
            sm="6">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        <v-icon :icon="skill.icon" class="mr-3" ></v-icon> {{ skill.title }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        {{ skill.text }}
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>   
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {   
            icon: '$vuetify',
            title: 'Frontend Development',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.',
        },
        {
            icon: '$vuetify',
            title: 'Backend Development',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.',
        },
        {
            icon: '$vuetify',
            title: 'Product Design',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.',
        },
        {
            icon: '$vuetify',
            title: 'UX Research',
            text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.',
        }
      ],
    }),
  }
</script>