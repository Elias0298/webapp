<template>
  <v-toolbar fixed color="black" dark class="pb-16">
    <v-toolbar-title class="mr-4" router to="home">
      <a href="/">GOLANG</a>
    </v-toolbar-title>
    <v-toolbar-items class="items">
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="songs">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="items">
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="login">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="register">
          Sign up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout" router to="/">
          Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.items {
  font-family: 'Courier';
}

.toolbar {
  font-family: 'Kalam';
}

a {
  text-decoration: none;
  color: white;
}
</style>
