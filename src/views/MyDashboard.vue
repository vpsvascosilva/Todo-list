<template>
  <div class="dashboard">
    <h2 class="grey--text mt-4 mb-4">Dashboard</h2>

    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder-outline</v-icon>
              <span right class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span right class="caption text-lowercase">by person name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>
      </v-row>

      <v-card
        color="yellow lighten-4"
        flat
        class="pa-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-row :class="`project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs="2">
            <!-- <div class="caption grey--text">Status</div>
                      <div>{{project.status}}</div> -->
            <div calign="right">
              <v-chip
                small
                :color="`${project.status}`"
                :class="`v-chip--active white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-divider></v-divider>
        </v-row>
      </v-card>
    </v-container>
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
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid #e0c444;
}

.project.overdue {
  border-left: 4px solid #ce1c16;
}

.v-chip.ongoing {
  background: #fed330;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.overdue {
  background: #fc5c65;
}
</style>
<!-- 

differences:
- v-row replaces v-layout
- v-col replaces v-flex
- for dynamic number of columns in v-col depending on screen size, define the default number of columns with cols="n" where n is within 1 -> 12, then define the number of columns for different screen sizes with sm="n", md="n", lg="n", and xl="n"
    - note: the default number of columns should be the number of columns for the smallest screen size 

  -->
