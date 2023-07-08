<template>
  <div class="projects">
    <h2 class="grey--text mt-4 mb-4">Projects</h2>

    <v-expansion-panels>
      <v-expansion-panel
        class=""
        v-for="project in myProjects"
        :key="project.title"
      >
        <v-expansion-panel-header>
          {{ project.title }}
        </v-expansion-panel-header>

        <v-expansion-panel-content class="px-4">
          <div class="font-weight-bold">{{ project.due }}</div>
          <div>{{ project.content }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container class="mx-2 mb-2"> </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Play bass",
          person: "Robert Trujillo",
          due: "4th Feb 2003",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Pratice rudiments",
          person: "Lars Ulrich",
          due: "1st Jan 1990",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Change guitar strings",
          person: "Kirk Hammett",
          due: "1st Jan 2030",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Drink less coffee",
          person: "James Hetfield",
          due: "1st Jan 2025",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Drink more water",
          person: "James Hetfield",
          due: "1th Jan 2026",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return (
          project.person === "James Hetfield" && project.status != "complete"
        );
      });
    },
  },
};
</script>
