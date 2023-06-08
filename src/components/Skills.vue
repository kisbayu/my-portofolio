<template>
    <v-container id="skills" class="mb-5">
        <div class="title d-flex justify-center mt-5">Skills</div>
        <div class="subtitle d-flex justify-center mb-3">Core Competencies and Expertise</div>
        
      <v-row no-gutters>
        <v-col 
            v-for="(skill, i) in skills"
            :key="i"    
            class="pa-5"
            cols="12"
            sm="6">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title class="font-weight-bold text-deep-purple-lighten-1">
                        <v-icon :icon="skill.icon" class="mr-3"/>{{ skill.title }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        {{ skill.text }}<br/>
                        <div class="font-weight-bold mt-2">Tools & Technology:</div>  
                        <img
                            v-for="(techItem, index) in skill.tech"
                            :key="index"
                            :src="getTechIconUrl(techItem)"
                            :alt="techItem"
                            width="40"
                            height="40"
                            class="mr-3 mt-2"
                        />
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>   
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          icon: 'mdi-monitor',
          title: 'Frontend Development',
          text: 'Bring ideas to life with intuitive and captivating user interfaces. I specialize in leveraging modern frontend frameworks to create engaging web experiences.',
          tech: ['vuedotjs', 'React', 'JavaScript'],
        },
        {
          icon: 'mdi-server-network',
          title: 'Backend Development',
          text:'Experience in building scalable server-side solutions. I specialize in designing and implementing REST APIs & databases and integrating with third-party services.',
          tech: ['Node.js', 'express', 'php', 'laravel', 'MySQL', 'PostgreSQL'],
        },
        {
          icon: 'mdi-palette',
          title: 'Product Design',
          text:
            'Crafting visually stunning and user-centric products is my passion. With a strong eye for aesthetics and a deep understanding of user experience principles, I create designs that seamlessly merge functionality and elegance.',
          tech: ['Figma'],
        },
        {
          icon: 'mdi-magnify',
          title: 'UX Research',
          text:
            'Uncover valuable insights and optimize user journeys through thorough research and analysis. I employ user-centered methodologies to understand user behavior, conduct usability testing, and refine product experiences.',
        },
      ],
    };
  },
  methods: {
    getTechIconUrl(techItem) {
      return `https://cdn.simpleicons.org/${techItem}`;
    },
  },
};
</script>