<template>
  <nav>
    <v-app-bar text app>
      <v-app-bar-nav-icon
        color="grey"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text font-weight-light"
        >Todo<span class="font-weight-medium">List</span></v-app-bar-title
      >

      <v-spacer />

      <v-menu offset-y>
      <template v-slot:activator="{on, attrs}">
        <v-btn text slot="activator" color="grey" v-bind="attrs" v-on="on">
            <v-icon>mdi-expand-more</v-icon>
            <div>Menu</div>
        </v-btn>
      </template>
      
      <v-list>
          <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
      </v-list>
  </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-row class="mt-5" justify="center">
        <v-avatar size="100" class="black">
          <img src="/av1.png" />
        </v-avatar>
      </v-row>
      <v-row justify="center">
        <p class="white--text subheading mt-1">James Hetfield</p>
      </v-row>
      <v-col>
        <MyPopup />
      </v-col>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import MyPopup from "./MyPopup";

export default {
  components: { MyPopup },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        {
          title: "Projects",
          icon: "mdi-folder-open-outline",
          route: "/projects",
        },
        { title: "Team", icon: "mdi-information-outline", route: "/team" },
        { title: "TestView", icon: "mdi-help-box", route: "/testview" },
      ],
    };
  },
};
</script>
