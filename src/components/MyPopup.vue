<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add a new Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Add Project</v-card-title
        >
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder-outline"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>

            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="formattedDate"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                  :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-btn right text class="success mt-4 pa-1" @click="submit" 
              >Add project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => (v && v.length >= 3) || "Minimum length is 3 characters"],
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return;
      }

      let temp = [];
      window.localStorage.setItem("projects", JSON.stringify(temp));

      try {
        temp = JSON.parse(window.localStorage.getItem("projects"));
      } catch {
        temp = [];
      }
      const project = {
        title: this.title,
        content: this.content,
        due: moment(this.due).format("Do MMMM YYYY"),
        person: "James Hetfield",
        status: "ongoing",
      };

      if (
        this.$refs.form.validate() &&
        this.title.length >= 3 &&
        this.content.length >= 3
      ) {
        temp.push(project);
        window.localStorage.setItem("projects", JSON.stringify(temp));
        this.loading = false;
        this.dialog = false;
        alert('Your new project was added to localstorage');
        alert(localStorage.getItem('projects'));
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? moment(this.due).format("Do MMMM YYYY") : "";
    },
  },
};
</script>
